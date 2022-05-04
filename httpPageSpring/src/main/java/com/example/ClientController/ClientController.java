package com.example.httpPageSpring.ClientController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.validation.BindingResult;

import com.example.httpPageSpring.domain.Client;

@Controller
public class ClientController {

    @GetMapping("/httpPageIndex")
    public String GetForm(Model model) {
        model.addAtribute("Client", new Client());
        return "httpPageIndex";
    }

    @PostMapping("/congratulation")
    public String PostForm(ModelAttribute Client client, BindingResult result, Model model) {
        model.addAtribute("Client", client);
        return "congratulation";
    }





}