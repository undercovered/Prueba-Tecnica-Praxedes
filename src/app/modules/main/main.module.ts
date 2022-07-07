import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*Componentes*/
import { CharactersComponent } from 'src/app/components/main/characters/characters.component';
import { EpisodesComponent } from "src/app/components/main/episodes/episodes.component";


/*Modulos*/
import {MatButtonModule} from '@angular/material/button';

import { MainRoutingModule } from './main-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/main/characters/dialog/dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    CharactersComponent,
    EpisodesComponent,
    DialogComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  entryComponents: [DialogComponent]
})
export class MainModule { }
