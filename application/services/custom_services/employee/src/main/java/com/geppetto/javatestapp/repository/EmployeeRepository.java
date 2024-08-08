package com.geppetto.javatestapp.repository;

import com.geppetto.javatestapp.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee,String>  {

}
