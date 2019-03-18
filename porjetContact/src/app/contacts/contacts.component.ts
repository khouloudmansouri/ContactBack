import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ContactServiceService } from '../services/contact-service.service';
import { Router } from '@angular/router';
import { Contact } from 'src/Model/contact.mpdel';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  list : any;
  motcle :string="";
  page: number =0;
  size:number=5;
  pages:Array<number>;


  constructor(public http: Http, public contactservice: ContactServiceService, public router:Router ) { }

  ngOnInit() {   

}
Search(){
  this.contactservice.getContacts(this.motcle,this.page,this.size)
.subscribe((resp)=>{
this.list = resp.json();
this.pages=new Array(resp.json().totalPages)
})
}
chercher(){

  this.Search();

}

gotoPage(i:number){
  this.page=i;
  this.Search();
}

onEditContact(id:number){
  this.router.navigate(['/edit-contact',id]);
  
}
onDeleteContact(contact:Contact){
  let confirm=window.confirm('etes vous sure ?')
  if(confirm==true){
  this.contactservice.DeleteContacts(contact.id)
    .subscribe((resp)=>{
    alert("suppression effecutee");
    this.list.content.splice(
      this.list.content.indexOf(contact,1)
    );
    
    })
  }
}

}
