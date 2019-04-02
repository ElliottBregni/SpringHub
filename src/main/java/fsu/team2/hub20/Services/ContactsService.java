package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.contacts;
@Lazy
@Service
public interface ContactsService {
	
	public List<contacts> getAllContacts();
	public void addContact(contacts contact);
	public Optional<contacts> getContact(long id);

}
