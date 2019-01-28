import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from './produto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/produtos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: enviar o erro para a infraestrutura de registro remoto - log para o console
      //console.error(error); 
  
      // Deixe o aplicativo continuar executando retornando um resultado vazio.
      return of(result as T);
    };
  }


  getProdutos (): Observable<Produto[]>{
    return this.http.get<Produto[]>(apiUrl)
    .pipe(
      tap(heroes => console.log('produtos obtidos')),
      catchError(this.handleError('getProdutos', []))
    );
  }

  getProdutoFindById(id: string): Observable<Produto>{
    const url = `${apiUrl}/${id}`;
    return this.http.get<Produto>(apiUrl)
    .pipe(
      tap(_ => console.log(`produto obtido id=${id}`)),
      catchError(this.handleError<Produto>(`getProdutoFindById id=${id}`))
    );
  }

  addProduto(produto): Observable<Produto>{
    return this.http.post<Produto>(apiUrl, produto, httpOptions)
    .pipe(
      tap((produto: Produto) => console.log(`produto adicionado w/ id=${produto._id}`)),
      catchError(this.handleError<Produto>(`addProduto`))
    );
  }

  updateProduto(id, produto): Observable<any>{
    const url = `${apiUrl}/${id}`;
    return this.http.put<Produto>(apiUrl, produto, httpOptions)
    .pipe(
      tap(_ => console.log(`produto atualizado id=${id}`)),
      catchError(this.handleError<Produto>(`updateProduto`))
    );
  }

  deleteProduto(id: string): Observable<Produto>{
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Produto>(apiUrl)
    .pipe(
      tap(_ => console.log(`produto deletado id=${id}`)),
      catchError(this.handleError<Produto>(`deleteProduto`))
    );
  }

}
