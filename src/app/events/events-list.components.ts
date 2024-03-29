import { Component } from '@angular/core'
import { EventService } from './shared/event.services';  
import { ToastrServices } from '../common/Toastr.Service';  
import { ActivatedRoute } from "@angular/router";
import { IEvent } from './shared';

@Component(
    {
        template:
        `<div>
            <h1> Upcoming Angular Events</h1>
            <hr/>
            <div class = "row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event"></event-thumbnail>
                </div>
            </div>      
        </div>`
    })

export class EventsListComponent
{
    events:IEvent[]
    constructor (private eventService: EventService, private toastr: ToastrServices, private route:ActivatedRoute)
    {

    }

    ngOnInit()
    {
        
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName)
    {
        this.toastr.success(eventName)
    }
}
