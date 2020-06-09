import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { ContentComponent } from './content/content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent}, // change ContentComponent to the home page when its done
  { path: 'products/:id', component: ContentComponent },
  { path: 'products', component: ContentComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', component: ContentComponent } // change ContentComponent to the home page when its done
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
