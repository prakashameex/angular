import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { FormserviceService } from '../formservice.service'
import { task } from '../form/form'

import {Router} from '@angular/router'
@Component({  
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent implements OnInit, AfterViewInit {
  animal: string;
  name: string;
  delid:any;
  arr: Array<any>;
  displayedColumns = ['_id', 'fname', 'lname', 'phoneno', 'gender', 'dob', 'edit', 'Delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private taskService: FormserviceService, private router: Router,public dialog: MatDialog) {

    this.taskService.getTasks()
      .subscribe(tasks => {
        this.arr = tasks;
        this.dataSource = new MatTableDataSource(this.arr);
        console.log(this.arr);
      });

  }
  openDialog(delid:any) {
    this.delid=delid
    console.log(this.delid)
  //   const dialogRef = this.dialog.open(DialogContent);

  //   dialogRef.afterClosed().subscribe(() => {
  //     console.log(`Dialog result: `);
  //   });
  }
  ngOnInit() {
    console.log('sort', this.sort)


  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  add(){
    this.router.navigate(['/form']);
  }
  edit(id: any) {
    
    console.log('current values', id)
    
    this.taskService.tableedit(id)
 this.router.navigate(['/form',{id}]);
  }
  delete(id: any) {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(res=> {
     console.log(`Dialog result: `);
   if(res==true){
console.log('resu',res)
    this.taskService.delete(id).subscribe((res: Response) => {
      // alert("Deleted Sucessfully");
       this.taskService.getTasks()
      .subscribe(tasks => {
        this.arr = tasks;
        this.dataSource = new MatTableDataSource(this.arr);
        console.log(this.arr);
      
      });
    });
  }
  });

  }
}


export interface UserData {
  _id: string;
  fname: string;
  lname: string;
  phoneno: number;
  gender: string;
  dob: Date;
}

@Component({
  selector: 'DialogContent',
  templateUrl: './DialogContent.html',
})
export class DialogContent {}