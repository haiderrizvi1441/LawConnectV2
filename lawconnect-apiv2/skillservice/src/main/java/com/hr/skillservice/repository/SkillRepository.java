package com.hr.skillservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.google.common.base.Optional;
import com.hr.skillservice.entity.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    Optional<Skill> findBySkillName(String skillName);

}
