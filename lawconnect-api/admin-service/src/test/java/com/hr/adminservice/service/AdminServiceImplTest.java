package com.hr.adminservice.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.hr.adminservice.repository.AdminRepository;

@SpringBootTest
public class AdminServiceImplTest {
    // Injections to be mocked
    @Mock
    private AdminRepository adminRepository;
    // Inejecting as Mock
    @InjectMocks
    AdminService adminService = new AdminServiceImpl();

    @DisplayName("Add Admin Success Scenario")
    @Test
    void testAddAdmin() {

    }

    @Test
    void testDeleteAdminById() {

    }

    @Test
    void testGetAdminById() {

    }

    @Test
    void testGetAllAdmins() {

    }

    @Test
    void testUpdateAdminById() {

    }
}
