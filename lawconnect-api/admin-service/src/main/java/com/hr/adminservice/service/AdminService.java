package com.hr.adminservice.service;

import java.util.List;

import com.hr.adminservice.entity.Admin;
import com.hr.adminservice.model.AdminRequest;
import com.hr.adminservice.model.AdminResponse;

public interface AdminService {

    long addAdmin(AdminRequest adminRequest);

    AdminResponse getAdminById(long id);

    List<AdminResponse> getAllAdmins();

    String deleteAdminById(long id);

    Admin updateAdminById(long id, AdminRequest adminRequest);

    
}
