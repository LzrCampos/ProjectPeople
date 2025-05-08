import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableBasicExample } from "./Table/table-basic-example";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableBasicExample, HeaderComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Persons';
}
