import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './orders/order-list/order-list.component';

const routes: Routes = [

  //Lazy Loading
  
    {path:'orders',component:OrderListComponent,
      loadChildren:()=>import('./orders/orders.module')
      .then(o=>o.OrdersModule)
    }
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
