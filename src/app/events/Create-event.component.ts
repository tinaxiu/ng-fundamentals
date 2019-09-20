import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from './shared';

@Component (
    {
        templateUrl: 'create-event.component.html',
        styles:[`

        em{ float:right; color:#E05C65; padding-left: 10px;}
         .error input {background-color: #E3C3C5;}
         .error ::-webkit-input-placeholder {color: #999;}
         .error :-moz-placeholder {color:#999;}
         .error :ms-input-placeholder {color:#999;}  }
      `]

    }
)

export class CreatEventComponent
{
    newEvent
    isDirty:boolean = true
    constructor(private router: Router, private eventService:EventService)
    {

    }

    ngOnInit()
    {
        this.newEvent = {
            name: 'Ng Spectacular',
            date: '8/8/2028',
            time: '10:00 am',
            price: 800
        }
    }
    saveEvent(formValues) 
    {
        this.eventService.saveEvent(formValues)
        this.router.navigate(['/events'])
        console.log(formValues)
        this.isDirty = true
    }
    cancel()
    {
        this.router.navigate(['/events'])
    }

}