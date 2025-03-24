package com.example.eduweb.config; // Đảm bảo package khớp với đường dẫn thư mục

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(List.of(
            "http://localhost:3000",
            "https://blog-website-frontend-shku.onrender.com"
        ));
        config.setAllowedHeaders(List.of(
            "Origin", "Content-Type", "Accept",
            "Authorization", "X-Requested-With",
            "Access-Control-Request-Method",
            "Access-Control-Request-Headers"
        ));
        config.setExposedHeaders(List.of(
            "Content-Disposition",
            "Authorization"
        ));
        config.setAllowedMethods(List.of(
            "GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"
        ));
        config.setMaxAge(3600L); // Cache preflight request 1 giờ
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}