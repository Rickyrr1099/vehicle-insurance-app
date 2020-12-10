package com.deloitte.vehicleinsuranceapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "customers")
public class Customer {

    @Id
    private String email;

    private String firstName;
    private String lastName;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate dob;

    private long contactNumber;
    private String vehicleNumber;

    public Customer() {
    }

    public Customer(String email, String firstName, String lastName, LocalDate dob,
                    long contactNumber, String vehicleNumber) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.contactNumber = contactNumber;
        this.vehicleNumber = vehicleNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }
}
