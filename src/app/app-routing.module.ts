import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfComponent } from './prof/prof.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { SoftwareComponent } from './software/software.component';



const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'prof', component: ProfComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'software', component: SoftwareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
