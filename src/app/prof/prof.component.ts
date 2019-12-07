import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { ProfExplainComponent } from './prof-explain/prof-explain.component';
import { WattwattComponent } from './wattwatt/wattwatt.component';
import { ArcadisComponent } from 'src/app/prof/arcadis/arcadis.component';
import { BaruchComponent } from 'src/app/prof/baruch/baruch.component';
import { DexgridComponent } from 'src/app/prof/dexgrid/dexgrid.component';
import { LanguageComponent } from 'src/app/prof/language/language.component';
import { MonolithComponent } from 'src/app/prof/monolith/monolith.component';
import { RpiComponent } from 'src/app/prof/rpi/rpi.component';
import { SolarcComponent } from 'src/app/prof/solarc/solarc.component';
import { TeslaComponent } from 'src/app/prof/tesla/tesla.component';
import { WarmhComponent } from 'src/app/prof/warmh/warmh.component';
import { SustainComponent } from 'src/app/prof/sustain/sustain.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {

  @Inject(MAT_DIALOG_DATA) private data: any;


  constructor( private dialog: MatDialog ) { }

  ngOnInit() {
  }

  openExplain(): void {
    const dialogRef = this.dialog.open( ProfExplainComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openSustain(): void {
    const dialogRef = this.dialog.open( SustainComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openWW(): void {
    const dialogRef = this.dialog.open( WattwattComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }


  openArc(): void {
    const dialogRef = this.dialog.open( ArcadisComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openBaruch(): void {
    const dialogRef = this.dialog.open( BaruchComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openDex(): void {
    const dialogRef = this.dialog.open( DexgridComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openLang(): void {
    const dialogRef = this.dialog.open( LanguageComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openMono(): void {
    const dialogRef = this.dialog.open( MonolithComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openRPI(): void {
    const dialogRef = this.dialog.open( RpiComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openSol(): void {
    const dialogRef = this.dialog.open( SolarcComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openTesla(): void {
    const dialogRef = this.dialog.open( TeslaComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

  openWarm(): void {
    const dialogRef = this.dialog.open( WarmhComponent, {
      width: '90%', maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    })
  }

}
