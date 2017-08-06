import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchesComponent } from './pages/matches/matches.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {MatchesService} from "./services/matches.service";
import { PlayersComponent } from './pages/players/players.component';
import {DialogModule} from "primeng/components/dialog/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MultiSelectModule} from "primeng/components/multiselect/multiselect";
import { DetailsComponent } from './pages/details/details.component';
import {DropdownModule} from "primeng/components/dropdown/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    PlayersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    DialogModule,
    MultiSelectModule,
    DropdownModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
