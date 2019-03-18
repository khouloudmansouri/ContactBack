import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactservice: ContactServiceService) { }

  ngOnInit() {
  }
  onSaveContact(dataForm){
    this.contactservice.saveContacts(dataForm)
     .subscribe((resp)=>{
     console.log(resp.json())
    })
  }
}
