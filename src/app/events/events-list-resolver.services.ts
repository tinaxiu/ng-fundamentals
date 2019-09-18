import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { EventService } from "./shared/event.services";


@Injectable()
export class EventListResolver implements Resolve<any>
{
    constructor(private eventServie:EventService)
    {

    }
    //making a sync call in the resolve like an Ajax call
    resolve()
    {
        return this.eventServie.getEvents().pipe(map(events =>events))
    }
}