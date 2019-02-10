import { Component,Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'medianet';
  visibility=false;
  constructor(public dialog: MatDialog) {}
  onclick(){
    this.visibility=true;
  }
  ngOnInit(){
    
   
  }
  openDialog(){
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '250px',
      
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
