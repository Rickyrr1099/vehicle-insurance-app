package com.deloitte.vehicleinsuranceapp.repository;

import com.deloitte.vehicleinsuranceapp.model.Insurance;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InsuranceRepository extends MongoRepository<Insurance, String> {

}
