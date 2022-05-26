package com.example.server2.controller;

import com.example.server2.model.Flight;
import com.example.server2.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightController {
    @Autowired
    private FlightRepository flightRepository;
     @GetMapping(path="/flight")
    @CrossOrigin(origins="http://localhost:4200")
     public List<Flight> getAllFlights() {

         return flightRepository.findAll();
     }


}
