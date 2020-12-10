package com.deloitte.vehicleinsuranceapp.service;

import com.deloitte.vehicleinsuranceapp.model.Customer;
import com.deloitte.vehicleinsuranceapp.model.Insurance;
import com.deloitte.vehicleinsuranceapp.model.Vehicle;
import com.deloitte.vehicleinsuranceapp.repository.CustomerRepository;
import com.deloitte.vehicleinsuranceapp.repository.InsuranceRepository;
import com.deloitte.vehicleinsuranceapp.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

@Service
public class VehicleInsuranceServiceImpl implements VehicleInsuranceService {


    private CustomerRepository customerRepository;
    private VehicleRepository vehicleRepository;
    private InsuranceRepository insuranceRepository;

    public VehicleInsuranceServiceImpl(CustomerRepository customerRepository, VehicleRepository vehicleRepository, InsuranceRepository insuranceRepository) {
        this.customerRepository = customerRepository;
        this.vehicleRepository = vehicleRepository;
        this.insuranceRepository = insuranceRepository;
    }

    @Override
    public void registerCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public List<String> getCustomerEmails() {

        List<Customer> customers = customerRepository.findAll();

        List<String> emails = new ArrayList<>();

        ListIterator<Customer> iterator = customers.listIterator();
        while (iterator.hasNext()) {
            String email = iterator.next().getEmail();
            emails.add(email);
        }
        return emails;
    }

    @Override
    public void saveVehicleDetails(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle getVehicleDetails(String email) {
        System.out.println("getVehicleDetailsServiceImpl");
        Vehicle v = vehicleRepository.findByEmail(email);
        if (v !=null) {
            Vehicle newVehicle = new Vehicle();
            newVehicle.setEmail(v.getEmail());
            newVehicle.setVehicleType(v.getVehicleType());
            newVehicle.setHasPersonalAccidentCover(v.getHasPersonalAccidentCover());
            newVehicle.setCity(v.getCity());
            newVehicle.setManufacturer(v.getManufacturer());
            newVehicle.setModel(v.getModel());
            newVehicle.setRegistrationYear(v.getRegistrationYear());
            return newVehicle;
        }
        else { return null; }
    }

    @Override
    public void saveInsuranceDetails(Insurance insurance) {
        insuranceRepository.save(insurance);
    }
}
