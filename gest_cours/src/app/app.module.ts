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
import { RouterModule } from '@angular/router';

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
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home',pathMatch:'full'},
      {path:'home', component: HomeComponent},
      {path:'add-course', component: AddCourseComponent},
      {path:'display-course', component: DisplayCourseComponent},
      {path:'course-detail', component: CourseDetailComponent}
    ])
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
