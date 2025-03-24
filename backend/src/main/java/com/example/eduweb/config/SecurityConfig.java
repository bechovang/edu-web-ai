package com.example.eduweb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration; 

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Bật CORS và sử dụng cấu hình từ CorsConfig
            .cors(cors -> cors.configurationSource(request -> {
                CorsConfiguration config = new CorsConfiguration();
                config.applyPermitDefaultValues();
                return config;
            }))
            
            // Tắt CSRF vì dùng API stateless
            .csrf(csrf -> csrf.disable())
            
            // Phân quyền endpoints
            .authorizeHttpRequests(auth -> auth
                // Cho phép OPTIONS request từ mọi nguồn
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                
                // Cho phép tất cả request tới /api/**
                .requestMatchers("/api/**").permitAll()
                
                // Các request khác yêu cầu xác thực
                .anyRequest().authenticated()
            )
            
            // Cấu hình session stateless
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );

        return http.build();
    }
}