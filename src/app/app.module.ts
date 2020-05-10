import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { CategoriesListModule } from './categories-list/categories-list.module';
import { ContentModule } from './content/content.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ContentModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
