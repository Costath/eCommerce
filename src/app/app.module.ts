import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactPageComponent,
    AboutPageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ContentModule,
    HeaderModule,
    LandingPageModule,
    CartModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
