package com.example.eduweb.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        // Cho phép cả local và production
        config.setAllowedOrigins(Arrays.asList(
            "http://localhost:3000",
            "https://edu-web-frontend.vercel.app",
            "https://your-custom-domain.com" // Nếu có
        ));
        
        config.setAllowedMethods(Arrays.asList("*"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(true);
        config.setMaxAge(3600L); // 1 hour
        
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}