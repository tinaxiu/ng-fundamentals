import { Routes } from "@angular/router";
import {
    EventsListComponent,
    EventDetailsComponent,
    CreatEventComponent,
    EventListResolver,
    EventRouteActivator,
    CreateSessionComponent

} from './events/index'
import { Error404Component } from './error/404.component';


export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent,resolve: {events:EventListResolver}},
    { path: 'events/new', component: CreatEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: 'events/session/new', component: CreateSessionComponent}
    
]