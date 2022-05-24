package com.example.backend;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {
    //List<User> findByEmail(String email);
    //public User findByEmailandPassword(String email, String password);

}
