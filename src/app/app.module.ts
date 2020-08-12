import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from "@angular/common/http";

/*Modulo Formulario*/
import { FormsModule } from '@angular/forms';

/*Paginación*/
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistPipe } from './pipes/wishlist.pipe';

/*Datatable http://l-lin.github.io/angular-datatables/#/getting-started*/
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterPipe,
    WishlistPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
