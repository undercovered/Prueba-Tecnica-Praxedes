

import { Component, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Episodios, Result } from 'src/app/interfaces/interfaces';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodios: Result[] | undefined;
  page_size: number = 1;
  page_number: number = 10;
  pageSizeOptions: number[] = [4, 10, 20];
  personajes: string[] | undefined;
  
  constructor(private service:ServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.service.getEpisodes(this.page_number.toString()).subscribe(
      (resp:Episodios) => {
        console.log(resp.results);
        this.episodios = resp.results;
      }
    )
  }

  handlePage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number =event.pageIndex + 1;
    this.service.getEpisodes(this.page_number.toString()).subscribe(
      (resp:Episodios) => {
        console.log(resp.results);
        this.episodios = resp.results;
      }
    )
  }

  verEpisodio(characters:string[]) {
    let idPersonajes = Array.from(characters, x=>x.replace('https://rickandmortyapi.com/api/character/','')).join();
    sessionStorage.setItem('idPersonajes', idPersonajes);
    this.router.navigate(['main/characters'])
  }



}