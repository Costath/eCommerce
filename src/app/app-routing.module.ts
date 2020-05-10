import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ContentComponent}, // change ContentComponent to the home page when its done
  { path: 'products/:id', component: ContentComponent },
  { path: 'products', component: ContentComponent },
  { path: '**', component: ContentComponent } // change ContentComponent to the home page when its done
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
