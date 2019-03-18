import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Model/contact.mpdel';
import { ActivatedRoute, Router} from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact:Contact= new Contact();
  mode:number=1;
  idContact:number;
  constructor(public activatedRouter:ActivatedRoute,  
    public contactService: ContactServiceService,
    public router: Router) {
    this.idContact=activatedRouter.snapshot.params['id'];   }

  ngOnInit() {
    this.contactService.getContact(this.idContact)
     .subscribe((resp)=>{
     this.contact=resp.json();
    })


  }

  updateContact(){
    this.contactService.UpadateContacts(this.contact)
     .subscribe((resp)=>{
      console.log(resp.json());
      this.router.navigate(['/contacts'])
      alert("Mise a jour effectuee");
      
      })

  }
}
