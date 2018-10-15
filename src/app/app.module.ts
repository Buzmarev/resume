import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataSource } from './model/datasource';
import { Repository } from './model/repository.model';
import { routes } from './app.routing';

import { RootComponent } from './root.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { JobsComponent } from './jobs/jobs.component';
import { SkillsComponent } from './skills/skills.component';

import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
  	RootComponent,
  	AdminComponent,
    AppComponent,
    FormComponent,
    JobsComponent,
    SkillsComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataSource, Repository],
  bootstrap: [RootComponent]
})
export class AppModule { }
