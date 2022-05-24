package com.example.backend;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {
    @Autowired
    private UserRepository repo;

    public User fetchUserByEmailandPassword(String email,String password){
        List<User> users=repo.findAll();
        User u;
        for(User user:users)
        {
            if(user.getMail().equals(email)&&user.getPassword().equals(password))
            {
                return user;
            }
        }
        return null;
    }
}
