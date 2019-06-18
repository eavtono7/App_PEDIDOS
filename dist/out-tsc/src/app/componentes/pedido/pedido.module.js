import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PedidoPage } from './pedido.page';
var routes = [
    {
        path: '',
        component: PedidoPage
    }
];
var PedidoPageModule = /** @class */ (function () {
    function PedidoPageModule() {
    }
    PedidoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PedidoPage]
        })
    ], PedidoPageModule);
    return PedidoPageModule;
}());
export { PedidoPageModule };
//# sourceMappingURL=pedido.module.js.map