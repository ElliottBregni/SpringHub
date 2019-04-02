package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.models.archiveStatus;
import fsu.team2.hub20.Repositorys.ArchiveStatusRepo;
@Lazy
@Repository
@Transactional
public class ArchiveStatusServiceImpl implements ArchiveStatusService {
	@Autowired
	private ArchiveStatusRepo ArchiveStatusRepo;
	
	public List<archiveStatus> getAllStatuses() {
		   List<archiveStatus> result = new ArrayList<archiveStatus>();
		   List<archiveStatus> statuses = (List<archiveStatus>) ArchiveStatusRepo.findAll();
		   for (archiveStatus status : statuses) {
			   
			   result.add(status);
		   }
		   return result;
	}
	
	public void addArchiveStatus(archiveStatus archiveStatus) {
			archiveStatus newStatus = new archiveStatus();
			newStatus.setArchiveID(archiveStatus.getArchiveID());
			newStatus.setDateTime(archiveStatus.getDateTime());
			newStatus.setUserID(archiveStatus.getUserID());
			ArchiveStatusRepo.save(newStatus);
			
	}
	
	public Optional<archiveStatus> getArchiveStatus(long id) {
		Optional<archiveStatus> status = ArchiveStatusRepo.findById(id);
		return status;
	}

}
