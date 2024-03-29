package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.sid.dao.ContactRepository;
import org.sid.entites.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ContactApplication implements CommandLineRunner {
	
	@Autowired
	private ContactRepository contactRepository;

	public static void main(String[] args) {
		SpringApplication.run(ContactApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		//contactRepository.save(new Contact(	"mansouri", "khouloud", df.parse("08/03/2019"), "khouloud.mnsr@gmail.com", 52136448,"jpg"));
		//contactRepository.save(new Contact(	"mansouri", "khouloud", df.parse("08/03/2019"), "khouloud.mnsr@gmail.com", 52136448,"jpg"));
        contactRepository.findAll().forEach(c->{System.out.println(c.getNom());}
        );
	}

}