import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import {Router} from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private thisDialogRef:MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) data,private router:Router) { }

  ngOnInit() {
  }
  
  close(){
    this.thisDialogRef.close('closed')
    this.router.navigate(['login'])
  }


}
