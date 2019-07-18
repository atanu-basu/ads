import { OfferServiceService } from './../../../services/offer-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  offerName = '';
  offers;
  constructor(private service: OfferServiceService) { }

  ngOnInit() {
  }
  search(){
    this.service.searchOffer(this.offerName).subscribe(
      data => this.offers = data,
      err => console.log(err)
    )
  }

}
