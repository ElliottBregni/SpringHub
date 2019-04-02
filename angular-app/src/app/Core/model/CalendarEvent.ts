import { Franchise } from 'src/app/Core/model/Franchise';

export interface CalendarEvent {
    EventId: number;
    EventDate: String;
    EventEndDate: String;
    Franchise: Franchise;
    EventType: String;
}
export class CalendatEvent {
    EventId: number;
    EventDate: String;
    EventEndDate: String;
    Franchise: Franchise;
    EventType: String;
    constructor( EventId: number,
        EventDate: String,
        EventEndDate: String,
        Franchise: Franchise,
        EventType: String){
            this.EventId =  EventId;
            this.EventDate =  EventDate;
            this.EventEndDate = EventEndDate;
            this.Franchise = Franchise;
            this.EventType = EventType;
    }
}