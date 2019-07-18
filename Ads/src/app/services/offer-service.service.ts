import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  url = 'http://localhost:8080/api/areacode/storename/offers';
  constructor(private http: HttpClient) { }
  
  createOffer(offer, image){
    const formData = new FormData();
    formData.append('productDetails', offer.productDetails);
    formData.append('offerDetails', offer.offerDetails);
    formData.append('expireDate', offer.expireDate);
    formData.append('image', image);

    return this.http.post(this.url + '/create', formData);
  }
  fetchOffer(){
    return this.http.get(this.url + '/fetch');
  }
  searchOffer(name){
    return this.http.get(this.url+"/fetch/"+name);
  }
}
