package com.hr.vendorservice.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Table(name="Vendor_Master")
public class Vendor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="first_name")
    private String firstname;

    @Column(name="last_name")
    private String lastname;

    @Column(name="email", unique = true)
    private String email;

    @Column(name="password")
    private String password;
    

    @Column(name="role")
    private UserRole role = UserRole.VENDOR;

    // @ManyToMany
    // @JoinTable(name = "Skill_Master", joinColumns = @JoinColumn(name="vendor_id"),
    //                                   inverseJoinColumns = @JoinColumn(name="skill_id"))
    // private Set<Skill> skills = new HashSet<>();

    @Column(name="skill")
    private List<String> skills = new ArrayList<>();



    // @OneToMany(mappedBy = "vendor")
    // private List<Appointment> appointments = new ArrayList<>();


    

    
}
