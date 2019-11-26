import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
// import { Projects } from './models/projects';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddtofireService {

  constructor( private db: AngularFirestore ) { }

  onSubmit(form) {
    let contact = form.value;
    console.log("Submitting your new project");
    console.log(contact);
    this.db.collection("contact").add({
      contact,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }  

}
