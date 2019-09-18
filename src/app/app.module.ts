import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from './events/shared/event.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';  
import { ToastrServices } from './common/Toastr.Service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreatEventComponent } from './events/Create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreatEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrServices,EventRouteActivator],
  bootstrap: [EventsAppComponent]

})
export class AppModule { }
