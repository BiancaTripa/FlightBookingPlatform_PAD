package com.example.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity

public class User {

    @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String Lastname;

    private String Firstname;

    private String mail;

    private String Phonenr;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLastname() {
        return Lastname;
    }

    public void setLastname(String lastname) {
        Lastname = lastname;
    }

    public String getFirstname() {
        return Firstname;
    }

    public void setFirstname(String firstname) {
        Firstname = firstname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhonenr() {
        return Phonenr;
    }

    public User(int id, String lastname, String firstname, String mail, String phonenr, String password) {
        this.id = id;
        Lastname = lastname;
        Firstname = firstname;
        this.mail = mail;
        Phonenr = phonenr;
        this.password = password;
    }

    public User(){

    }
    public void setPhonenr(String phonenr) {
        Phonenr = phonenr;
    }
}
