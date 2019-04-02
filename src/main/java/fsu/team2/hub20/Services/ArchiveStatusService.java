package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.archiveStatus;
@Lazy
@Service
public interface ArchiveStatusService {
	
	public List<archiveStatus> getAllStatuses();
	public void addArchiveStatus(archiveStatus archiveStatus);
	public Optional<archiveStatus> getArchiveStatus(long id);

}
