import { EventsListComponent } from './events/events-list.components';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes } from "@angular/router";
import { CreatEventComponent } from './events/Create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { resolve } from 'q';
import { EventListResolver } from './events/events-list-resolver.services';

export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent,resolve: {events:EventListResolver}},
    { path: 'events/new', component: CreatEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
    
]