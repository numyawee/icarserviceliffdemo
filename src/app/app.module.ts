import { PpComponent } from './pp/pp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: 'pp', component: PpComponent, data: { depth: 2 } },
];

@NgModule({
  declarations: [
    AppComponent,
    PpComponent
  ],
  imports: [
    IonicModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
