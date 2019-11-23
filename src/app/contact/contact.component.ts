import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form: FormGroup;

  // constructor(private fb: FormBuilder, private af: AngularFireModule, private db: AngularFirestore) {
  //   this.createForm();
  // }

  ngOnInit() {
  }

  // createForm() {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     message: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   const {name, email, message} = this.form.value;
  //   // const date = Date();
  //   const html = `
  //     <div>From: ${name}</div>
  //     <div>Email: <a href="mailto:${email}">${email}</a></div>
  //     <div>Message: ${message}</div>
  //   `;
  //   let formRequest = { name, email, message, html };
  //   // this.db.collection("vincenz").list('/messages').push(formRequest);
  //   this.form.reset();
  // }

}
