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


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,  
    ToastrModule.forRoot()  
  ],
  providers: [EventService, ToastrServices],
  bootstrap: [EventsAppComponent]

})
export class AppModule { }
