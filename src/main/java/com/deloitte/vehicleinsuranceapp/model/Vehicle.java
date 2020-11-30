package com.deloitte.vehicleinsuranceapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vehicles")
public class Vehicle {

    @Id
    private String email;

    private String vehicleType;
    private boolean hasPersonalAccidentCover;
    private String city;
    private String manufacturer;
    private String model;
    private int registrationYear;

    public Vehicle(String email, String vehicleType, boolean hasPersonalAccidentCover,
                   String city, String manufacturer, String model, int registrationYear) {
        this.email = email;
        this.vehicleType = vehicleType;
        this.hasPersonalAccidentCover = hasPersonalAccidentCover;
        this.city = city;
        this.manufacturer = manufacturer;
        this.model = model;
        this.registrationYear = registrationYear;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "email='" + email + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                ", hasPersonalAccidentCover=" + hasPersonalAccidentCover +
                ", city='" + city + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", model='" + model + '\'' +
                ", registrationYear=" + registrationYear +
                '}';
    }

    public Vehicle(String email) {
        this.email = email;
    }

    public Vehicle() {

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public boolean getHasPersonalAccidentCover() {
        return hasPersonalAccidentCover;
    }

    public void setHasPersonalAccidentCover(boolean hasPersonalAccidentCover) {
        this.hasPersonalAccidentCover = hasPersonalAccidentCover;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getRegistrationYear() {
        return registrationYear;
    }

    public void setRegistrationYear(int registrationYear) {
        this.registrationYear = registrationYear;
    }

}
