import { Component, OnInit, Injectable, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AddtofireService } from '../service/addtofire.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig, MatFormFieldModule } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form: FormGroup;

  constructor(public _fireservice: AddtofireService, private fb: FormBuilder, 
    private af: AngularFireModule, private db: AngularFirestore,
    private dialog: MatDialog, private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<MatDialog>
  ) {}

  ngOnInit() {
  }

  public contact = {
    name: '',
    email: '',
    message: ''
  }

  form: NgForm
  
  onSubmit(form: NgForm){
      this._fireservice.onSubmit(form);
      // this.notificationService.success(':: Application Pending! (Esc to close)');
      // const dialogRef = this.dialog.close( ContactComponent, {
      //   width: '90%', maxWidth: '90%'
      // });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('Closed');
      // })
  }

  message = "Submitted. I'll reach out soon!";
  action = "Close";

  openSnackBar(message: string, action: string) {
    this._snackBar.open(this.message, this.action, {
      duration: 4000,
    });
  }

  closeDialog() {
    console.log("Closing Dialog");
      this.dialogRef.close('Closing');
  }

}
