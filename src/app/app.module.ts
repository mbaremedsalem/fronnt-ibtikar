import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { SetupPasswordComponent } from './setup-password/setup-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeEnseignantComponent } from './home-enseignant/home-enseignant.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { CoursesComponent } from './courses/courses.component';
import { VideosCoursesComponent } from './videos-courses/videos-courses.component';
import { ArchiveComponent } from './archive/archive.component';
import { ProfileComponent } from './profile/profile.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MesCoursesComponent } from './mes-courses/mes-courses.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerificationOtpComponent,
    SetupPasswordComponent,
    ForgetPasswordComponent,
    HomeEnseignantComponent,
    HomeEtudiantComponent,
    CoursesComponent,
    VideosCoursesComponent,
    ArchiveComponent,
    ProfileComponent,
    MesCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
