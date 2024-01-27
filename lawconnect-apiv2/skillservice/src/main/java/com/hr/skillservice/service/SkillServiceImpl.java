package com.hr.skillservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hr.skillservice.entity.Skill;
import com.hr.skillservice.model.SkillRequest;
import com.hr.skillservice.repository.SkillRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class SkillServiceImpl implements SkillService {

    private SkillRepository skillRepository;
    @Override
    public Long addSkill(SkillRequest skillrequest) {
        log.info("Adding Skill....");

        // Converting from Model to Entity
        Skill skill = Skill.builder()
                    .skillName(skillrequest.getSkillname())
                    .build();
        
        // Saving the object in Database through JPA Repo
        skillRepository.save(skill);

        log.info("Skill added successfully");
        return skill.getId();
    }
    

}
