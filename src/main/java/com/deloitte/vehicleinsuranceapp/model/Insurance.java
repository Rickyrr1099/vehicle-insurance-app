package com.deloitte.vehicleinsuranceapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "insurances")
public class Insurance {

    @Id
    private String email;

    private String insurerName;
    private int idv;
    private int premium;
    private boolean purchased;

    public Insurance(String email, String insurerName, int idv, int premium, boolean purchased) {
        this.email = email;
        this.insurerName = insurerName;
        this.idv = idv;
        this.premium = premium;
        this.purchased = purchased;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInsurerName() {
        return insurerName;
    }

    public void setInsurerName(String insurerName) {
        this.insurerName = insurerName;
    }

    public int getIdv() {
        return idv;
    }

    public void setIdv(int idv) {
        this.idv = idv;
    }

    public int getPremium() {
        return premium;
    }

    public void setPremium(int premium) {
        this.premium = premium;
    }

    public boolean isPurchased() {
        return purchased;
    }

    public void setPurchased(boolean purchased) {
        this.purchased = purchased;
    }
}
