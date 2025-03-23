package com.example.eduweb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.disable()) // Tắt hoặc cấu hình CORS
            .csrf(csrf -> csrf.disable()) // Tắt CSRF để test API dễ hơn
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/**").permitAll() // Cho phép tất cả API truy cập
                .anyRequest().authenticated()
            );

        return http.build();
    }
}
