import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: '404', loadChildren: './404/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule { }
