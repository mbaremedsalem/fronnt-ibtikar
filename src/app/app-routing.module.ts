import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SetupPasswordComponent } from './setup-password/setup-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { HomeEnseignantComponent } from './home-enseignant/home-enseignant.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { CoursesComponent } from './courses/courses.component';
import { VideosCoursesComponent } from './videos-courses/videos-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ArchiveComponent } from './archive/archive.component';
import { MesCoursesComponent } from './mes-courses/mes-courses.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-otp', component: VerificationOtpComponent },
  { path: 'setup-password', component: SetupPasswordComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },

  // { path: 'update/:id', component: UpdateAgentComponent },
  // { path: 'update-gerant/:id', component: UpdateGerantComponent },
  // { path: 'update-direction/:id', component: UpdateGerantComponent },

  {
    path: 'home-enseignant', // Incluez "home" dans le chemin
    component: HomeEnseignantComponent,
    children: [
      { path: 'mes-courses', component: MesCoursesComponent },
      
      // { path: 'direction-ad', component: DirectionComponent },
      // { path: 'document-admin', component: DocumentAdminComponent },
      // { path: 'profile-admin', component: ProfileComponent },
      // { path: 'agents', component: AgentComponent },
      // { path: 'gerants', component: GerantComponent },
      // { path: 'Archive-admin', component: ArchiveComponent },
    ],
  },
  {
    path: 'home-etudiant', // Incluez "home" dans le chemin
    component: HomeEtudiantComponent,
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'videos-courses', component: VideosCoursesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'archive', component: ArchiveComponent },
    ],
  },
  // {
  //   path: 'home-gerant', // Incluez "home" dans le chemin
  //   component: HomeManagerComponent,
  //   children: [
  //     { path: 'direction-admin', component: DirectionComponent },
  //     { path: 'document-admin', component: DocumentAdminComponent },
  //     { path: 'profile-admin', component: ProfileComponent },
  //     { path: 'agents', component: AgentComponent },
  //     { path: 'gerants', component: GerantComponent },
  //     { path: 'arcive-gerant', component: ArchiveComponent },
  //   ],
  // },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
