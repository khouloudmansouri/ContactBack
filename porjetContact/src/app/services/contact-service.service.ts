import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from 'src/Model/contact.mpdel';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(public http : Http) { }

  getContacts(motcle:string , page:number , size:number){
    return this.http.get("http://localhost:8080/Recherchercontacts?m="+motcle+"&size="+size+"&page="+page)
  }

  saveContacts(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact)
  }

  getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id)
  }

  UpadateContacts(contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
  }

   DeleteContacts(id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id)
  }
}
