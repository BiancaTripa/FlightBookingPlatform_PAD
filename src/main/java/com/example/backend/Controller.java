package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController

public class Controller {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public  List<User> getAllUsers() {

        return userRepository.findAll();
    }
    @PostMapping(path = "/users")
    @CrossOrigin(origins = "http://localhost:4200")
    /*void addUser(User user){
       // User user1=new User(1,"Daniela","Voiculescu","daniela.voiculescu@gmail.com","0766618052","AN");
        userRepository.save(user);
       // userRepository.save(user1);
    }*/
    //@PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {

        System.out.println("Controller called");
        return ResponseEntity.ok(userRepository.save(user));


    }

}
