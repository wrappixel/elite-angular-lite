import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdCarouselBasic } from './carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Carousel',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Carousel'}]
    },
	component: NgbdCarouselBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdCarouselBasic]
})
export class ButtonsModule { }
