import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesFinderComponent } from './profiles-finder/profiles-finder.component';
import { RepositoryFinderComponent } from './repository-finder/repository-finder.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path: 'profiles-finder', component: ProfilesFinderComponent},
  { path: 'repository-finder', component: RepositoryFinderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
