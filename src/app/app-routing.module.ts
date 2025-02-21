import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '',component:WelcomeComponent},
  { path: 'about', component: AboutComponent },
  { path:'education', component: EducationComponent},
  { path:'skills', component:SkillsComponent},
  { path:'contacts',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
