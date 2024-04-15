package com.hr.customerservice.service;

import java.util.List;

import com.hr.customerservice.entity.ContactInfo;
import com.hr.customerservice.model.ContactInfoRequest;

public interface ContactInfoService {
    
    ContactInfo addContactInfo(ContactInfoRequest contactInfoRequest);

    ContactInfo getContactInfoById(long id);

    List<ContactInfo> getAllContactInfo();

    String deleteContactInfoById(long id);
}
