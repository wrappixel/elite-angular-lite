import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdtypeheadBasic } from './typehead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/Http';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Typehead',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Typehead'}]
    },
	component: NgbdtypeheadBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      HttpClientModule,
      JsonpModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdtypeheadBasic]
})
export class TypeheadModule { }
