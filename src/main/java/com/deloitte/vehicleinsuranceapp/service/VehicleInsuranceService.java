package com.deloitte.vehicleinsuranceapp.service;

import com.deloitte.vehicleinsuranceapp.model.Customer;
import com.deloitte.vehicleinsuranceapp.model.Insurance;
import com.deloitte.vehicleinsuranceapp.model.Vehicle;

import java.util.List;

public interface VehicleInsuranceService {

    void registerCustomer (Customer customer);

    List<String> getCustomerEmails();

    void saveVehicleDetails(Vehicle vehicle);

    Vehicle getVehicleDetails(String email);

    void saveInsuranceDetails(Insurance insurance);
}
