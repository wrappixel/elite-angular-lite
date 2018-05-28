import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';

import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RightSidebarComponent } from '../shared/right-sidebar/rightsidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        RightSidebarComponent,
        SIDEBAR_TOGGLE_DIRECTIVES

    ]
})
export class PagesModule { }
