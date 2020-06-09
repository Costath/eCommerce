import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IProduct } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl = 'assets/';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.baseUrl + 'products.json')
          .pipe(
              catchError(this.handleError)
          );
    }

    getFilteredProducts(category): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl + 'products.json')
            .pipe(
              map(products => {
                  const catProducts = products.filter((product: IProduct) => product.category === category);
                  return catProducts;
            }),
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<IProduct> {
      return this.http.get<IProduct[]>(this.baseUrl + 'products.json')
        .pipe(
          map(products => {
            const product = products.filter((prod: IProduct) => prod.productId === id);
            return (product && product.length) ? product[0] : null;
          }),
          catchError(this.handleError)
        );
    }

    getCategories(): Observable<IProduct[]> {
      return this.http.get<any[]>(this.baseUrl + 'categories.json')
          .pipe(
              catchError(this.handleError)
          );
    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
