import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { HomecontentComponent } from './pages/homecontent/homecontent.component';

const routes: Routes = [
  {
    path:'',redirectTo:'homecontent',pathMatch:'full'
  },
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'search', component: SearchComponent
      },
      {
        path:'homecontent', component: HomecontentComponent
      }

    ]
  },
  { path: 'login', component: LoginComponent },
  // {path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
