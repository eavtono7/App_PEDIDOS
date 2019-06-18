import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SucursalesPage } from './sucursales.page';
var routes = [
    {
        path: '',
        component: SucursalesPage
    }
];
var SucursalesPageModule = /** @class */ (function () {
    function SucursalesPageModule() {
    }
    SucursalesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SucursalesPage]
        })
    ], SucursalesPageModule);
    return SucursalesPageModule;
}());
export { SucursalesPageModule };
//# sourceMappingURL=sucursales.module.js.map