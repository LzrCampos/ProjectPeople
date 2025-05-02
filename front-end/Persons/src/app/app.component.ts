import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableBasicExample } from "./Table/table-basic-example";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableBasicExample, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Persons';
}
