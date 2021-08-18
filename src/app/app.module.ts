// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRegisterComponent } from './component/register/new-register/new-register.component';
import { RegisterListComponent } from './component/register/register-list/register-list.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { Erro404Component } from './component/erro404/erro404.component';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'

import { RegisterService } from './component/register/register.service';
import { RouterModule } from '@angular/router';
import { RegisterInfoComponent } from './component/register/register-info/register-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRegisterComponent,
    RegisterListComponent,
    NavBarComponent,
    Erro404Component,
    RegisterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'new-register', pathMatch: 'full'
      },
      {
        path: 'new-register', component: NewRegisterComponent
      },
      {
        path: 'register-list', component: RegisterListComponent
      },
      {
        path: 'register-list/info/:id', component: RegisterInfoComponent
      },
      {
        path: '**', component: Erro404Component
      }
    ])
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
