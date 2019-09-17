import { Component, Input} from '@angular/core'
//import { EventEmitter } from 'protractor'
declare let toastr

@Component(
    {
        selector:'event-thumbnail',
        template:`
            <div class="well hoverwell thumbnail">
            <h2> {{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Tima: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
                <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
                <span *ngSwitchDefault> (Normal Start)</span>            
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Locations: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event.location.Country}}</span>

            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
            </div>
        `,
        styles:[
            `
             .green {color: #003300 !important;}
             .bold {font-weight: bold;}
             .pad-left {margin-left: 10px;}
             .well div {color: #bbb;}
             .thumbnail {min-height: 210px;}
             `
            
        ]

    }
)

export class EventThumbnailComponent
{
    @Input() event:any

    getStartTimeClass()
    {
        if(this.event && this.event.time === '8:00 am')
            return ['green','bold']

        return []
    }

    getStartTimeStyle():any
    {
        if(this.event && this.event.time === '8:00 am')
        return {color: '#003300', 'font-weight':'bold'}

    return {}
    }
}