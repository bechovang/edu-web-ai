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
            // Cấu hình CORS (không dùng .cors().and() nữa)
            .cors(cors -> cors.configure(http))
            
            // Tắt CSRF (cách mới)
            .csrf(csrf -> csrf.disable())
            
            // Cấu hình authorization với Lambda DSL
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/**").permitAll()
                .anyRequest().authenticated()
            );
            
        return http.build();
    }
}