import { OfferServiceService } from './../../../services/offer-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  fileToUpload: File = null;
  offer = {
    productDetails: '',
    offerDetails: '',
    expireDate: '',
  };
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  constructor(private serivce: OfferServiceService) { }

  ngOnInit() {
  }
  create() {
    this.serivce.createOffer(this.offer, this.fileToUpload).subscribe(
      response => alert('File Uploaded Successfully'),
      err => alert('error')
    )
    this.offer = {
      productDetails: '',
      offerDetails: '',
      expireDate: '',
    };
  }

}
