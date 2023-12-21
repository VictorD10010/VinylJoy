package br.edu.ifpb.vinyljoy.api;

import org.springframework.context.annotation.ComponentScan;


import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@ComponentScan(basePackages = "br.edu.ifpb.vinyljoy.vinyljoy.controller")
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

}
