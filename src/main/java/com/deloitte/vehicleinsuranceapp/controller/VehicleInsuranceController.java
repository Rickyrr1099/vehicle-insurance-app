package com.deloitte.vehicleinsuranceapp.controller;

import com.deloitte.vehicleinsuranceapp.model.Customer;
import com.deloitte.vehicleinsuranceapp.model.Insurance;
import com.deloitte.vehicleinsuranceapp.model.Vehicle;
import com.deloitte.vehicleinsuranceapp.service.VehicleInsuranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicleinsurance")
public class VehicleInsuranceController {

    @Autowired
    private VehicleInsuranceService vehicleInsuranceService;

    @PostMapping(value = "/register")
    public ResponseEntity<String> registerCustomer(@RequestBody Customer customer) {
        vehicleInsuranceService.registerCustomer(customer);
        return new ResponseEntity("Customer registered successfully!", HttpStatus.CREATED);
    }

    @PostMapping(value = "/details")
    public ResponseEntity<String> saveVehicleDetails (@RequestBody Vehicle vehicle) {
        vehicleInsuranceService.saveVehicleDetails(vehicle);
        return new ResponseEntity("Vehicle Details saved " +
                "successfully for registered e-mail: "+ vehicle.getEmail(), HttpStatus.CREATED);
    }

    @GetMapping(value = "/results/{email}")
    public ResponseEntity<Vehicle> getVehicleDetails (@PathVariable String email) {
        Vehicle vehicleDetails = vehicleInsuranceService.getVehicleDetails(email);
        return new ResponseEntity(vehicleDetails, HttpStatus.OK);
    }

    @PostMapping(value = "/results")
    public ResponseEntity<String> saveInsuranceDetails (@RequestBody Insurance insurance) {
        vehicleInsuranceService.saveInsuranceDetails(insurance);
        return new ResponseEntity("Insurance Details saved " +
                "successfully for registered e-mail: "+ insurance.getEmail(), HttpStatus.CREATED);
    }
}
