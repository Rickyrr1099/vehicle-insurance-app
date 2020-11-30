package com.deloitte.vehicleinsuranceapp.repository;

import com.deloitte.vehicleinsuranceapp.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {

}


