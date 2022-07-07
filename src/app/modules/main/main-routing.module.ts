import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CharactersComponent } from 'src/app/components/main/characters/characters.component';
import { EpisodesComponent } from 'src/app/components/main/episodes/episodes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'characters', component: CharactersComponent },
      { path: 'episodes', component: EpisodesComponent },
      { path: '**', redirectTo: 'episodes', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
