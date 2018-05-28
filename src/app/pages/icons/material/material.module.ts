import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material.component';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Material-Icon',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Material-Icon'}]
    },
	component: MaterialComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [MaterialComponent]
})
export class MaterialComponentModule { }