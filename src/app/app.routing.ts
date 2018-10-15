import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
	{ path: "admin", component: AdminComponent },
	{ path: "", component: AppComponent }
]
