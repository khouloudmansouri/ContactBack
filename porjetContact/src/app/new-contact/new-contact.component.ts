import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Model/contact.mpdel';
import { ContactServiceService } from '../services/contact-service.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact:Contact= new Contact();
mode:number=1;

  constructor(public contactService: ContactServiceService) { }

  ngOnInit() {
  }

saveContact(){
  this.contactService.saveContacts(this.contact)
  .subscribe((resp)=>{
    this.contact=resp.json();
    this.mode=2;
})
}
}
