package com.antonioalv.portfolio.web;

import com.antonioalv.portfolio.model.Contact;
import com.antonioalv.portfolio.model.ContactRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final Logger log = LoggerFactory.getLogger(ContactController.class);

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/contacts")
    Collection<Contact> contacts() {
        return contactRepository.findAll();
    }

//    @GetMapping("/contact/{id}")
//    ResponseEntity<?> getGroup(@PathVariable Long id) {
//        Optional<Contact> contact = contactRepository.findById(id);
//        return contact.map(response -> ResponseEntity.ok().body(response))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }

    @PostMapping("/contact")
    ResponseEntity<Contact> createContact(@Valid @RequestBody Contact contact) throws URISyntaxException {
        log.info("Request to create contact: {}", contact);
        Contact result = contactRepository.save(contact);
        return ResponseEntity.created(new URI("/api/contact/" + result.getId()))
                .body(result);
    }
    //leaving out for now
    //
//    @PutMapping("/group/{id}")
//    ResponseEntity<Group> updateGroup(@Valid @RequestBody Group group) {
//        log.info("Request to update group: {}", group);
//        Group result = groupRepository.save(group);
//        return ResponseEntity.ok().body(result);
//    }
//
//    @DeleteMapping("/group/{id}")
//    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
//        log.info("Request to delete group: {}", id);
//        groupRepository.deleteById(id);
//        return ResponseEntity.ok().build();
//    }
}
