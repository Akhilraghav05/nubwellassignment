import { Component, OnInit,ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import  {TestService} from '../test.service';
import {MatDialog, MatDialogConfig, MatPaginator} from '@angular/material';
import  { DialogComponent} from '../dialog/dialog.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
//   values: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',abcd:'hi',efgh:'ww'},
// ];
//   newAttribute:any ={};
//   displayedColumns = ['position', 'name', 'weight', 'symbol','abcd','efgh'];
//   subject = new BehaviorSubject(this.values);
//   dataSource = new CaseListDatasource(this.subject.asObservable());

//   applyFilter(filterValue: string) {
//     filterValue = filterValue.trim(); // Remove whitespace
//     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
//   }
//   dedeleteFieldValue(){
//     if(this.values){
//      this.values.pop();
//     }
//   }

//   add() {
//     this.values.push(this.newAttribute);
//     this.subject.next(this.values);
//   }
 

// }

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   abcd:string;
//   efgh:string;
// }

  newarray: any;
  value: string;
  viewValue: string;
 
  receiverId: any;
  userdetails: any;
  dialogvalue: any;
 
  
  selectedValue:string;
  constructor(private cookieService: CookieService, private router: Router,
    private testService:TestService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.receiverId = this.testService.GetUserInfo()
    this.userdetails = this.cookieService.get('userinfo');
    console.log(this.userdetails);
  }
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  
  addFieldValue() {
     this.newarray = this.fieldArray.push(this.newAttribute)
    // var mywish = this.newarray.unshift();
    this.newAttribute = {};
    console.log(this.newarray);
      
  
  }


  deleteFieldValue(index: number) {
    this.fieldArray.splice(index, 1);
  }
  // Options = [
  //   { value: 'None', viewValue: 'None' },
  //   { value: 'IP', viewValue: 'IP' },

  // ];
  // types = [
  //   { value: 'Permit', viewValue: 'Permit' },
  //   { value: 'Denined', viewValue: 'Denined' },

  // ]
  
  del() {
    const dialogConfig = new MatDialogConfig();
    
    let dialogRef = this.dialog.open(DialogComponent,dialogConfig)
     
  
     dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.dialogvalue = result;

  });

    this.cookieService.delete('user-Info');
 
  
setTimeout((router: Router) => {
  this.router.navigate(['login'])
}, 9000); 
   
  }
  // testMethod($event: any){
  //   this.fieldArray[field.DestionationIP] = $event
  // }









}
