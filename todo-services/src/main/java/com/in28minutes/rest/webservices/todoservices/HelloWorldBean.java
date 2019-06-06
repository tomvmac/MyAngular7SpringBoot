package com.in28minutes.rest.webservices.todoservices;

public class HelloWorldBean {

	private String message;

	public HelloWorldBean(String message, String comment) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	




	
	
	
}
