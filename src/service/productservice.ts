import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Product } from '../domain/product';

@Injectable({
    providedIn: 'root'
})

    export class ProductService{ 
        private apiUrl = 'https://localhost:16370/api'; 
        constructor(private http: HttpClient,private MessageService:MessageService) {}

          getProductsSale(){
            console.log("aoo");
            let url =this.apiUrl;
            console.log(url+"/productsSale")
            return this.http.get<any[]>(url+"/productsSale")
              .pipe(map((res: any) => {
                return res;
              }), catchError((err: any) => {
                return throwError(() => new Error (err));
              })
            );
          }
          
         getProductsByCategory(body:any){
          let url =this.apiUrl;
          console.log(body);
            console.log(url+"/productsByCategory")
            return this.http.post<any[]>(url+"/productsByCategory",body)
              .pipe(map((res: any) => {
                return res;
              }), catchError((err: any) => {
                return throwError(() => new Error (err));
              })
            );

         }
};
/*     getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData());
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

  /*  getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }*/ 
