package com.hr.customerservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr.customerservice.entity.ContactInfo;
import com.hr.customerservice.exception.ContactInfoCustomException;
import com.hr.customerservice.model.ContactInfoRequest;
import com.hr.customerservice.repository.ContactInfoRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class ContactInfoServiceImpl implements ContactInfoService {
    @Autowired
    private ContactInfoRepository contactInfoRepository;
    @Override
    public ContactInfo addContactInfo(ContactInfoRequest contactInfoRequest) {
        
        log.info("Saving contact info");
        ContactInfo contactInfo = ContactInfo.builder()
                                    .email(contactInfoRequest.getEmail())
                                    .message(contactInfoRequest.getMessage())
                                    .build();
        if(contactInfo == null){
            throw new ContactInfoCustomException("Error while creating Contact Info");
        }
        return contactInfoRepository.save(contactInfo);
    }


    @Override
    public ContactInfo getContactInfoById(long id) {
        log.info("Getting contact info");
        ContactInfo contactInfo = contactInfoRepository. findById(id).get();
        if(contactInfo == null){
            throw new ContactInfoCustomException("No Contact Info for the given Id");
        }
        return contactInfo;
    }


    @Override
    public List<ContactInfo> getAllContactInfo() {
        
        List<ContactInfo> AllContactInfo = contactInfoRepository.findAll();
        return AllContactInfo;
    }


    @Override
    public String deleteContactInfoById(long id) {
        log.info("Deleting Contact Message ");
        contactInfoRepository.deleteById(id);
        log.info("Deleted Successfully");
        return "Contact Message delete successfully";
    }
    
}
