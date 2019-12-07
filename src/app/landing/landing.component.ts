import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { BottomComponent } from '../bottom/bottom.component';
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Inject(MAT_DIALOG_DATA) private data: any;

  constructor( private dialog: MatDialog ) { }

  ngOnInit() {
  }

  message(): void {
    const dialogRef = this.dialog.open( ContactComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

}
