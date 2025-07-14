import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { FormsModule } from '@angular/forms';

  @Component({
    standalone: true,
   selector: 'metas',
   templateUrl: './metas.component.html',
   styleUrls: ['./metas.component.css'],
   imports: [FormsModule]
 })
 export class MetasComponent implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[];

    atualizarAluno(aluno: Aluno): void {
       this.alunoService.atualizar(aluno);
    }

    ngOnInit(): void {
      this.alunos = this.alunoService.getAlunos();
    }

  }