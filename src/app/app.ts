import { Component } from '@angular/core';

import { Header } from './componentes/header/header';
import { Navbar } from './componentes/navbar/navbar';
import { Main } from './componentes/main/main';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}