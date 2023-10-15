import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  titre = " BIENVENUE !!"
  ajoutActive= false;
  nomDevoir:string= "";
  dateRendu: Date | undefined;


  assignments: Assignment[] = [
    {
      nom:"TP1 sur WebComponents, un lecteur audio amélioré",
      dateRendu: new Date('2020-11-17'),
      rendu: true
    },
    {
      nom: "TP2 sur Angular, un joli gestionnaire de devoir",
      dateRendu: new Date('2020-12-15'),
      rendu: false
    },
    {
      nom: "TP3 sur Angular, utilisation du router et de Web Services",
      dateRendu: new Date('2021-01-04'),
      rendu : false 
    }
  ];
  

  ngOnInit(): void {
    // Le code que vous souhaitez exécuter lors de l'initialisation du composant
    console.log('Le composant est initialisé !');
    setTimeout(()=>{
      this.ajoutActive= true;
    },2000)
  }

  onSubmit(){
    console.log(this.nomDevoir);
    const newAss = new Assignment();
    newAss.nom=this.nomDevoir;
    newAss.dateRendu = this.dateRendu;
    newAss.rendu=false; 
    this.assignments.push(newAss);
  }
  
  
}
