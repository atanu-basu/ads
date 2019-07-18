import { OfferServiceService } from './../../../services/offer-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  offers:any;
  constructor(private service: OfferServiceService) { }

  ngOnInit() {
    this.service.fetchOffer().subscribe(
      data => this.offers = data,
      err => alert('Error')
    )
  }

}
