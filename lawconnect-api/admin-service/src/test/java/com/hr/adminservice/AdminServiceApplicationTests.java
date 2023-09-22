package com.hr.adminservice;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hr.adminservice.repository.AdminRepository;

@SpringBootTest
class AdminServiceApplicationTests {

	@Mock
    private AdminRepository adminRepository;

	
}
