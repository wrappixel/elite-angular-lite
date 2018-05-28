import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdAlertBasic } from './alert.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Alert',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Alert'}]
    },
	component: NgbdAlertBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdAlertBasic]
})
export class NgAlertModule { }
