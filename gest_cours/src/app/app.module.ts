import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { FooterComponent } from './footer/footer.component';
import { AddCourseComponent } from './Course/add-course/add-course.component';
import { DisplayCourseComponent } from './Course/display-course/display-course.component';
import { CourseDetailComponent } from './Course/course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemsComponent,
    FooterComponent,
    AddCourseComponent,
    DisplayCourseComponent,
    CourseDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
