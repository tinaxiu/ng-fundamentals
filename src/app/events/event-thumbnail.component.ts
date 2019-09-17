import { Component, Input} from '@angular/core'
//import { EventEmitter } from 'protractor'

@Component(
    {
        selector:'event-thumbnail',
        template:`
            <div class="well hoverwell thumbnail">
            <h2> {{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div>Tima: {{event?.time}}</div>
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
            `.pad-left {margin-left: 10px;}
             .well div {color: #bbb;}
             .thumbnail {min-height: 210px;}
             `
            
        ]

    }
)

export class EventThumbnailComponent
{
    @Input() event:any

}