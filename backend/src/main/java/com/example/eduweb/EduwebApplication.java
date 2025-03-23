package com.example.eduweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EduwebApplication {
    public static void main(String[] args) {
        SpringApplication.run(EduwebApplication.class, args);
        
        // ANSI màu xanh (màu xanh lá: \u001B[32m)
        String green = "\u001B[32m";
        String reset = "\u001B[0m"; // Reset màu về mặc định

        System.out.println(green + "\n============================");
        System.out.println("X  Backend da chay! X ");
        System.out.println("============================\n"  + reset);
    }
}

