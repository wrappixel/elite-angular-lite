import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdPopTooltip } from './popover-tooltip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Popover & Tooltip',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Popover & Tooltip'}]
    },
	component: NgbdPopTooltip
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdPopTooltip]
})
export class PopoverTooltipModule { }
