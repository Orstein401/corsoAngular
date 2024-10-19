import { Routes } from '@angular/router';
import { UserComponent } from './compoments/user/user.component';
import { SommaComponent } from './compoments/somma/somma.component';
import { DetailComponent } from './compoments/detail/detail.component';
import { PageNotFoundComponent } from './compoments/page-not-found/page-not-found.component';
 import { HomePageComponent } from './pages/home-page/home-page.component';
 import { FormUserComponent } from './compoments/form-user/form-user.component';
import { EsercizioComponent } from './compoments/esercizio/esercizio.component';
import { ReactiveFormComponent } from './compoments/reactive-form/reactive-form.component';
import { ReactiveEsercizioComponent } from './compoments/reactive-esercizio/reactive-esercizio.component';
export const routes: Routes = [
    // { path: '', redirectTo: '/somma', pathMatch: 'full' },
    // {path:"home", component:HomePageComponent },
    {path:"use", component: UserComponent},
    {path:"somma", component:SommaComponent},
    {path:"dettagli/:id",component:DetailComponent },
    {path:"form", component: FormUserComponent},
    {path:"esercizio", component:EsercizioComponent },
    {path:"reattivo", component:ReactiveFormComponent },
    {path:"es_reactive", component:ReactiveEsercizioComponent },

      
    {path:"**", component: PageNotFoundComponent}

];