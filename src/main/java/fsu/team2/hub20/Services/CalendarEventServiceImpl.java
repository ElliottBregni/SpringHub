package fsu.team2.hub20.Services;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import  fsu.team2.hub20.models.calendarEvent;
import  fsu.team2.hub20.Repositorys.CalendarEventRepo;

@Repository
@Transactional
public class CalendarEventServiceImpl implements CalendarEventService {
	@Autowired
	private CalendarEventRepo CalendarEventRepo;
	
	public List<calendarEvent> getAllCalendarEvents() {
		   List<calendarEvent> result = new ArrayList<calendarEvent>();
		   List<calendarEvent> calendarEvents = (List<calendarEvent>) CalendarEventRepo.findAll();
		   for (calendarEvent calendarEvent : calendarEvents) {
			   
			   result.add(calendarEvent);
		   }
		   return result;
	}
	
	public void addCalendarEvent(calendarEvent calendarEvent) {
			calendarEvent newCalendarEvent = new calendarEvent();
			newCalendarEvent.setCalEventID(calendarEvent.getCalEventID());
			newCalendarEvent.setDate(calendarEvent.getDate());
			newCalendarEvent.setEventType(calendarEvent.getEventType());
			CalendarEventRepo.save(newCalendarEvent);
	}
	
	public Optional<calendarEvent> getCalendarEvent(long id) {
		Optional<calendarEvent> calendarEvent = CalendarEventRepo.findById(id);
		return calendarEvent;
	}

}
