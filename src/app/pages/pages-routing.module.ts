import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
            { path: 'accordion', loadChildren: './component/accordion/accordion.module#AccordionModule' },
            { path: 'alert', loadChildren: './component/alert/alert.module#NgAlertModule' },
            { path: 'carousel', loadChildren: './component/carousel/carousel.module#ButtonsModule' },
            { path: 'datepicker', loadChildren: './component/datepicker/datepicker.module#DatepickerModule' },
            { path: 'dropdown', loadChildren: './component/dropdown-collapse/dropdown-collapse.module#DropdownModule' },
            { path: 'modal', loadChildren: './component/modal/modal.module#ModalModule' },
            { path: 'pagination', loadChildren: './component/pagination/pagination.module#paginationModule' },
            { path: 'poptool', loadChildren: './component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule' },
            { path: 'progressbar', loadChildren: './component/progressbar/progressbar.module#progressbarModule' },
            { path: 'rating', loadChildren: './component/rating/rating.module#RatingModule' },
            { path: 'tabs', loadChildren: './component/tabs/tabs.module#TabsModule' },
            { path: 'timepicker', loadChildren: './component/timepicker/timepicker.module#TimepickerModule' },
            { path: 'typehead', loadChildren: './component/typehead/typehead.module#TypeheadModule' },
            { path: 'fontawesome', loadChildren: './icons/fontawesome/fontawesome.module#FontawesomeModule' },
            { path: 'simpleline', loadChildren: './icons/simpleline/simpleline.module#SimplelineIconModule' },
            { path: 'material', loadChildren: './icons/material/material.module#MaterialComponentModule' },
            { path: 'basicform', loadChildren: './form/basic/basic.module#BasicFormModule' },
            { path: 'basictable', loadChildren: './table/basic/basic.module#BasicTableModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
