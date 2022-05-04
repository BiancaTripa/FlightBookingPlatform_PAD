package com.example.httpPageSpring.domain;

public class Client {

    private String destination;
    private String duration;
    private String covidCertification;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getCovidCertification() {
        return covidCertification;
    }

    public void setCovidCertification(String covidCertification) {
        this.covidCertification = covidCertification;
    }
}