package com.ems.employeemanagementsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ems.employeemanagementsystem.domain.Employee;
import com.ems.employeemanagementsystem.repository.EmployeeRepository;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {

	@Autowired
	EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Employee employee1 = new Employee();
		employee1.setFirstName("Dheeraj");
		employee1.setLastName("Inuganti");
		employee1.setEmail("ivldheeraj@gmail.com");
		employeeRepository.save(employee1);

		Employee employee2 = new Employee();
		employee2.setFirstName("Virat");
		employee2.setLastName("Kohli");
		employee2.setEmail("VK@gmail.com");
		employeeRepository.save(employee2);

	}

}
