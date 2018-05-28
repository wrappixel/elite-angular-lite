import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdratingBasic } from './rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Rating',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Rating'}]
    },
	component: NgbdratingBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      ReactiveFormsModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdratingBasic]
})
export class RatingModule { }
