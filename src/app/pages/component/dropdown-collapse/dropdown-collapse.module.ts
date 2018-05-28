import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdDropdownBasic } from './dropdown-collapse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Dropdown',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Dropdown'}]
    },
	component: NgbdDropdownBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdDropdownBasic]
})
export class DropdownModule { }
