import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Basic Table',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Basic Table'}]
    },
	component: BasicComponent
}];

@NgModule({
	imports: [
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [BasicComponent]
})
export class BasicTableModule { }