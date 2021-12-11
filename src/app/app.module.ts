import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BetsComponent } from './components/bets/bets.component';
import { OutputComponent } from './components/output/output.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarkComponent } from './components/mark/mark.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BetsComponent,
    OutputComponent,
    MenuComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
