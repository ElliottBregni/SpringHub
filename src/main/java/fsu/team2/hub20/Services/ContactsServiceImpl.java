package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.models.contacts;
@Lazy
@Repository
@Transactional
public class ContactsServiceImpl implements ContactsService {
	@Autowired
	private fsu.team2.hub20.Repositorys.ContactsRepo ContactsRepo;
	
	public List<contacts> getAllContacts() {
		   List<contacts> result = new ArrayList<contacts>();
		   List<contacts> contacts = (List<contacts>) ContactsRepo.findAll();
		   for (contacts contact : contacts) {
			   
			   result.add(contact);
		   }
		   return result;
	}
	
	public void addContact(contacts contact) {
		contacts newContact = new contacts(0, 0);
		newContact.setContactPricipal(contact.getContactPricipal());
		newContact.setListMember(contact.getListMember());
		ContactsRepo.save(newContact);
	}
	
	public Optional<contacts> getContact(long id) {
		Optional<contacts> contact = ContactsRepo.findById(id);
		return contact;
	}

}
