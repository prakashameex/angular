import { Component,Inject, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { FormsService } from '../forms.service';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
export interface DialogData {

  
  firstname:string; 
  lastname:string;
   dob :Date;
   email :string;
   phone:string;
    gender:string;
}
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'dob', 'email', 'phone', 'gender', 'actionsColumn'];
  dataSource;
  statusCode: number;

  prefFormat = 'dd-MM-yyyy';



  constructor(public snackBar: MatSnackBar,private formservice: FormsService, public router: Router,public dialog: MatDialog) {
  }
  openDialog(value): void {
    console.log(value);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '1000px',
      data: [{_id:value._id,firstname: value.firstname, lastname: value.lastname, dob: value.dob,
        email: value.email, phone: value.phone, gender: value.gender}],
      
    } 
  );

    dialogRef.afterClosed().subscribe(result => {
      let d=result;
     if(typeof d === 'undefined'){
      console.log('The dialog was closed');
     }
     else{
       this.deleteUser(value);
     }
    });
 
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {

 this.getAllUsers();

  }

  getAllUsers() {

    this.formservice.getAllUsers().subscribe(users =>{
    
    this.dataSource =  new MatTableDataSource(users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    }
    );

  }

  deleteUser(data) {
    console.log(data._id);
    let message=data.firstname+' '+data.lastname;
    let action='Removed Succesfully';
    this.formservice.deleteUserById(data._id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllUsers();
    
      this.openSnackBar(message,action);
      },
        errorCode => this.statusCode = errorCode);
  }



}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}