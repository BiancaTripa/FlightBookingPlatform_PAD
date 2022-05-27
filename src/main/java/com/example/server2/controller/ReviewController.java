package com.example.server2.controller;


import com.example.server2.model.Flight;
import com.example.server2.model.Review;
import com.example.server2.repository.FlightRepository;
import com.example.server2.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewController {
    @Autowired

    private ReviewRepository reviewRepository;
    @GetMapping(path="/review")
    @CrossOrigin(origins="http://localhost:4200")
    public List<Review> getAllReviews() {

        return reviewRepository.findAll();
    }

    @PostMapping(path="/review")
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<Review> registerReview(@RequestBody Review review) {

        System.out.println("Controller called");
        return ResponseEntity.ok(reviewRepository.save(review));


    }

}
