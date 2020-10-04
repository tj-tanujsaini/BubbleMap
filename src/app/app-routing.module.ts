//Routes for the app are Defined here
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmchartsComponent } from './BubbleMap/amcharts/amcharts.component';
import { AmchartsConnectionComponent } from './ConnectionMap/amcharts/connection-amcharts.component';

const appRoutes: Routes = 
[
    {path: '', redirectTo: '/bubblemap' , pathMatch: 'full'},
    {path: 'bubblemap', component: AmchartsComponent},
    {path: 'connectionmap', component: AmchartsConnectionComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}