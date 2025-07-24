import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    pathMatch: 'full',
    loadComponent:()=>{
        return import("./home/home").then(m=>m.Home)
    },
    },
    {
        path:'completed',
        loadComponent:()=>{
            return import("./completed/completed").then(m=>m.Completed)
        },
    },
    {
        path:"pending",
        loadComponent:()=>{
            return import("./pending/pending").then(m=>m.Pending)
        },
    },
];
