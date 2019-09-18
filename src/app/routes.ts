import { EventsListComponent } from './events/events-list.components';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes } from "@angular/router";
import { CreatEventComponent } from './events/Create-event.component';

export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/new', component: CreatEventComponent},
    { path: 'events/:id', component: EventDetailsComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]