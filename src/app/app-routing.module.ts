import { HomePageComponent } from './components/home-page/home-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
        {
          path: '',
          component: HomePageComponent,
          pathMatch: 'full',
        },
        {
          path: 'about',
          component: AboutPageComponent,
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
