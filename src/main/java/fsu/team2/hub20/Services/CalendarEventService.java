package fsu.team2.hub20.Services;
import  fsu.team2.hub20.models.calendarEvent;
import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
@Lazy
@Service
public interface CalendarEventService {
	
	public List<calendarEvent> getAllCalendarEvents();
	public void addCalendarEvent(calendarEvent calendarEvent);
	public Optional<calendarEvent> getCalendarEvent(long id);

}
