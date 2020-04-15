import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTagComponent } from './user-tag/user-tag.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MessListComponent } from './mess-list/mess-list.component';
import { MessTagComponent } from './mess-tag/mess-tag.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SendMessComponent } from './send-mess/send-mess.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTagComponent,
    UserListComponent,
    MessListComponent,
    MessTagComponent,
    SendMessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
