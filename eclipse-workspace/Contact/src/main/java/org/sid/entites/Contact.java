package org.sid.entites;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Contact implements Serializable {
	
	@Id @GeneratedValue
	private long id;
	private String nom ;
	private String prenom;
	
	@Temporal(TemporalType.DATE)
	private Date datenaissance;
	private String email;
	private long telephone;
	private String photo;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public Date getDatenaissance() {
		return datenaissance;
	}
	public void setDatenaissance(Date datenaissance) {
		this.datenaissance = datenaissance;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getTelephone() {
		return telephone;
	}
	public void setTelephone(long telephone) {
		this.telephone = telephone;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public Contact(String nom, String prenom, Date datenaissance, String email, long telephone, String photo) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.datenaissance = datenaissance;
		this.email = email;
		this.telephone = telephone;
		this.photo = photo;
	}
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}