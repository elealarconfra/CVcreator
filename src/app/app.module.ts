import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserInfoComponent } from './user-info/user-info.component';
import { PersonalInfoComponent } from './user-info/personal-info/personal-info.component';
import { EmailComponent } from './user-info/personal-info/email/email.component';
import { PhotoCVComponent } from './user-info/personal-info/photo-cv/photo-cv.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';





@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        UserInfoComponent,
        PersonalInfoComponent,
        EmailComponent,
        PhotoCVComponent,
        MatButtonModule,
        MatCardModule
    ]
})
export class AppModule { }
