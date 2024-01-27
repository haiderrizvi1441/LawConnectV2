package com.hr.adminservice.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

@Table(name="users")
public class Admin {
    
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
    private UserRole role = UserRole.ADMIN;

}
