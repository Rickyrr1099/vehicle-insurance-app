package com.deloitte.vehicleinsuranceapp.repository;

import com.deloitte.vehicleinsuranceapp.model.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface VehicleRepository extends MongoRepository<Vehicle, String> {

    Vehicle findByEmail(String email);
}
