import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Basic Form',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Basic Form'}]
    },
	component: BasicComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [BasicComponent]
})
export class BasicFormModule { }