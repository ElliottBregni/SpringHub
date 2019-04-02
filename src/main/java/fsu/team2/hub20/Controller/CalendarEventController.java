package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import fsu.team2.hub20.Services.CalendarEventService;
import fsu.team2.hub20.models.calendarEvent;
import fsu.team2.hub20.Services.CalendarEventServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/Calendar")
public class CalendarEventController 
{
	@Autowired
	private CalendarEventService calendarEventSerivce;
	
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<calendarEvent> getCalendarEvents()
	{
		return calendarEventSerivce.getAllCalendarEvents();
	}
	
	@CrossOrigin()
	@GetMapping(path="/{id}", produces = "application/json")
	public Optional<calendarEvent> getCalendarEventById(@PathVariable("id") long id)
	{
		return calendarEventSerivce.getCalendarEvent(id);
	}
	
	@CrossOrigin
	@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addCalendarEvent(@RequestBody calendarEvent CalendarEvent)
	{
		calendarEventSerivce.addCalendarEvent(CalendarEvent);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand()
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}

}
