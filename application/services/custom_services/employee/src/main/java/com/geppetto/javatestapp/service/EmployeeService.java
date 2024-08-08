package com.geppetto.javatestapp.service;

import com.geppetto.javatestapp.dto.EmployeeDto;
import java.util.List;
import java.util.Map;

public interface EmployeeService {

    EmployeeDto create(EmployeeDto employeeDto);



    List<EmployeeDto> getAllValues();


    EmployeeDto update(EmployeeDto employeeDto);


    String delete(String id);



}
