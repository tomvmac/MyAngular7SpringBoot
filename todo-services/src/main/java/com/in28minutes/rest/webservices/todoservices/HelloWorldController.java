package com.in28minutes.rest.webservices.todoservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
@CrossOrigin
@RestController
public class HelloWorldController {
	
	
	// GET
	// URI - /hello-world
	@GetMapping(path="/hello-world")
	public String helloWorld(){
		return "Hello World";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean(){
		//throw new RuntimeException("Some shit hit the fan!");
		return new HelloWorldBean("Hello Dude");
	}
	
	
	// Path Parameter
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
	
}
