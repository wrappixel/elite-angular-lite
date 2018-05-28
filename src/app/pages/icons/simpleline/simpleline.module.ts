import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SimplelineComponent } from './simpleline.component';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Simple-Line-Icon',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Simple-Line-Icon'}]
    },
	component: SimplelineComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [SimplelineComponent]
})
export class SimplelineIconModule { }