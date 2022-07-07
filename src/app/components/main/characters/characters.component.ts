import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Results } from 'src/app/interfaces/interfaces';
import { ServiceService } from 'src/app/services/service.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  idPersonaje: string[] =[];
  personajes: Results[];

  constructor(private service:ServiceService,
              public dialog: MatDialog) { }
  validador: boolean = false;
  ngOnInit(): void {
    
    this.ejecutar();
    this.service.obtenerFavoritos();
  }
  ejecutar(){
    this.service.getcharacters(sessionStorage.getItem('idPersonajes')).
    subscribe(
      resp => {
        console.log(resp)
        this.personajes = resp;
        this.validador = true;
      }
    );
  }
  abrir(personaje:Results):void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'fit-content',
      data: personaje
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
 }


}
