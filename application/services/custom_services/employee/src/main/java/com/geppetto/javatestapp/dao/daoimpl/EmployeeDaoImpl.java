package com.geppetto.javatestapp.dao.daoimpl;

import com.geppetto.javatestapp.model.Employee;
import com.geppetto.javatestapp.repository.EmployeeRepository;
import com.geppetto.javatestapp.dao.EmployeeDao;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class EmployeeDaoImpl implements EmployeeDao{

    private final EmployeeRepository employeeRepository;

     public EmployeeDaoImpl(EmployeeRepository employeeRepository) {
       this.employeeRepository = employeeRepository;
}

    @Override
    public Employee create(Employee employee) {
      return employeeRepository.save(employee);
    }



    @Override
    public List<Employee> getAllValues() {
      return employeeRepository.findAll();
    }


    @Override
    public Optional<Employee> update(String id) {
      return employeeRepository.findById(id);
    }


    @Override
    public void delete(String id) {
      employeeRepository.deleteById(id);
    }

}
