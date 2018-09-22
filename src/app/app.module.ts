import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

import {LoginComponent} from './login';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';
import {RegisterComponent} from './register';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {AlertComponent} from './_directives';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AlertService, AuthenticationService, UserService} from './_services';
import {AuthGuard} from './_guards';
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './_helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {routing} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing, RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
