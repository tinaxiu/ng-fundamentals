import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  EventListResolver, 
  EventThumbnailComponent,
  EventService,
  EventsListComponent,
  EventDetailsComponent,
  CreatEventComponent,
  EventRouteActivator,
  

} from './events/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';  
import { ToastrServices } from './common/Toastr.Service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './error/404.component';




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
  providers: [
    EventService, 
    ToastrServices,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState 
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]

})
export class AppModule { }

export function checkDirtyState(component: CreatEventComponent)
{
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you reaaly want to cancel?')
  return true
}