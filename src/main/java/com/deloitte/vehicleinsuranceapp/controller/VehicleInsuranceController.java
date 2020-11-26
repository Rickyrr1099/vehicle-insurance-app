package com.deloitte.vehicleinsuranceapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class VehicleInsuranceController {

    @GetMapping("/")
    public List getVehicleDetails() {
        List vehicleDetails = new ArrayList();
        vehicleDetails.add("Kochi");
        vehicleDetails.add("Honda");
        vehicleDetails.add("Apache");
        vehicleDetails.add("2020");
        return (vehicleDetails);
    }
}
