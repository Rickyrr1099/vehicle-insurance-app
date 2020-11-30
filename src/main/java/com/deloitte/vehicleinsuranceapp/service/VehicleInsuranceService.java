package com.deloitte.vehicleinsuranceapp.service;

import com.deloitte.vehicleinsuranceapp.model.Customer;
import com.deloitte.vehicleinsuranceapp.model.Insurance;
import com.deloitte.vehicleinsuranceapp.model.Vehicle;

public interface VehicleInsuranceService {

    void registerCustomer (Customer customer);

    void saveVehicleDetails(Vehicle vehicle);

    Vehicle getVehicleDetails(String email);

    void saveInsuranceDetails(Insurance insurance);
}
