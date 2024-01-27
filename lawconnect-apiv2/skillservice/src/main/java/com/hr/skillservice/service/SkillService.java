package com.hr.skillservice.service;

import java.util.List;

import com.hr.skillservice.entity.Skill;
import com.hr.skillservice.model.SkillRequest;

public interface SkillService {

    Long addSkill(SkillRequest skillrequest);
    List<Skill> getAllSKills(); 

}
