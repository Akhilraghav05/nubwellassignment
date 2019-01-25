import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatIconModule } from '@angular/material';
import {FormsModule,ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TableComponent } from './table/table.component';
import {MatSelectModule} from '@angular/material/select';
import { CookieService } from 'ngx-cookie-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe }from './filter.pipe';
import { AngularWebStorageModule } from 'angular-web-storage';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    FilterPipe,
    DialogComponent
    
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,  
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule ,
    NgxPaginationModule,
    AngularWebStorageModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    ToastrModule.forRoot() ,
    // SessionExpirationAlertModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path:'login' ,component:LoginComponent},
      {path:'table', component:TableComponent}
    ])
  ],
  providers: [CookieService],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
