import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Produto } from 'src/app/shared/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = environment.apiUrlProdutos; //URL api DEV carregada do environment.ts 'https://localhost:7184/api/Produto/'


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Lista todos os produtos
  FindAll(): Observable<Produto[]> {
    return this.httpClient
      .get<Produto[]>(this.url + 'FindAll', this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Post de um Produto com as propriedades a serem filtradas 
  // e retorna a Lista doa Produtos filtrados 
  FindProduto(produto: Produto): Observable<Produto[]> {
    return this.httpClient
      .post<Produto[]>(this.url + 'FindProduto', JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  Cadastrar(produto: Produto): Observable<Produto> {
    console.log('Cadastrar: ', JSON.stringify(produto));
    return this.httpClient
      .post<Produto>(this.url + 'Create', JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  Alterar(produto: Produto): Observable<Produto> {
    console.log('Alterar: ', JSON.stringify(produto));
    return this.httpClient
      .put<Produto>(this.url + 'Update', JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  FindById(id: string): Observable<Produto> {
      return this.httpClient
      .get<Produto>(this.url + 'FindById/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  Deletar(id: string): Observable<boolean> {
    return this.httpClient
    .delete<boolean>(this.url + 'Delete/' + id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

PreviewImage(base64Image: string, fileName: string): Observable<any> {
    const payload = { fileName, base64Image };
    return this.httpClient.post(this.url + 'PreviewImage', payload);
  }

  getImage(id: string): Observable<any> {
    return this.httpClient.get(`${this.url + 'GetImage'}/${id}`);
  }

  // getProdutos(): Observable<string[]> {
  //   return this.httpClient.get<string[]>(this.urlTeste);
  // }

  // getProdutoStr(): Observable<string> {
  //   return this.httpClient.get<string>(this.urlTeste2);
  // }


  // // Obtem um carro pelo id
  // getCarById(id: number): Observable<Car> {
  //   return this.httpClient.get<Car>(this.url + '/' + id)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // // utualiza um carro
  // updateCar(car: Car): Observable<Car> {
  //   return this.httpClient.put<Car>(this.url + '/' + car.id, JSON.stringify(car), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  // // deleta um carro
  // deleteCar(car: Car) {
  //   return this.httpClient.delete<Car>(this.url + '/' + car.id, this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  };
}
