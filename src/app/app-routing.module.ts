import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GithubComponent } from "./components/github/github.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  { path: "github", component: GithubComponent },
  { path: "landing", component: LandingComponent},
  { path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
