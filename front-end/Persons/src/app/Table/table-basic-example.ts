import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class TableBasicExample implements AfterViewInit {
  private _httpClient = inject(HttpClient);
  displayedColumns: string[] = ['cpf', 'nome', 'genero', 'endereco', 'idade', 'municipio', 'estado'];
  getDataBase: GetHttpDatabase | null;
  data: Person[] = []

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.getDataBase = new GetHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.getDataBase!.getRepoIssues(
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          if (data?.length)
            console.log("data", data[0]);

          if (data === null) {
            console.log("teste error");
            return [];
          }
          this.resultsLength = data.length;
          return data;
        }),
      )
      .subscribe(data => {
        this.data = data
      });
  }
}

export interface Person {
  cpf: string;
  nome: string;
  genero: string;
  endereco: string;
  idade: number;
  municipio: string;
  estado: string;
}

export class GetHttpDatabase {
  constructor(private _httpClient: HttpClient) { }

  getRepoIssues(): Observable<Person[]> {
    const href = 'https://localhost:7041';
    const requestUrl = `${href}/persons`;

    return this._httpClient.get<Person[]>(requestUrl);
  }
}
