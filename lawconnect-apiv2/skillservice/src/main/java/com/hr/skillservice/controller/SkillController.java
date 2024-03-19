package com.hr.skillservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skill")
public class SkillController {
    
    @GetMapping("/test")
    public String testing(){
        return "Skill Service is Working fine";
    }

    @GetMapping("/skill_id")
    public 

}
