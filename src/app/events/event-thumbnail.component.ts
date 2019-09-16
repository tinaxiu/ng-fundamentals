import { Component, Input, Output, EventEmitter} from '@angular/core'
//import { EventEmitter } from 'protractor'

@Component(
    {
        selector:'event-thumbnail',
        template:`
            <div class="well hoverwell thumbnail">
            <h2> {{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Tima: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Locations: {{event.location.address}}</span>
                <span> &nbsp; </span>
                <span>{{event.location.city}}</span>
                <span> &nbsp; </span>
                <span>{{event.location.Country}}</span>
            </div>
            </div>
        `

    }
)

export class EventThumbnailComponent
{
    @Input() event:any
    Someproperty: any = "some value"
    logFoo()
    {
        console.log('foo')
    }
}