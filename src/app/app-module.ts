import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HeoresList } from './heroes/heores-list/heores-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperaBas } from './formulario/opera-bas/opera-bas';
import { Distancia } from './formulario/distancia/distancia';

@NgModule({
  declarations: [App, HeoresList, HeroesFilterPipe, OperaBas, Distancia],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
