import { Component, signal } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('ta-gui');
    aluno: Aluno = {nome: "", cpf: "", email: ""};
    alunoService = new AlunoService();
    alunos: Aluno[] = [];
    cpfduplicado: boolean = false;

     gravar(a: Aluno): void {
      if (this.alunoService.gravar(a)) {
       this.alunos.push(a);
       this.aluno = {nome: "", cpf: "", email: ""};
      } else {
        this.cpfduplicado = true;
      }
     }
    onMove(): void {
      this.cpfduplicado = false;
  }
}



