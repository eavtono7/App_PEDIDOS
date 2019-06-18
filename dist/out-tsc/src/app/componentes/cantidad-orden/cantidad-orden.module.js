import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CantidadOrdenPage } from './cantidad-orden.page';
var routes = [
    {
        path: '',
        component: CantidadOrdenPage
    }
];
var CantidadOrdenPageModule = /** @class */ (function () {
    function CantidadOrdenPageModule() {
    }
    CantidadOrdenPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CantidadOrdenPage]
        })
    ], CantidadOrdenPageModule);
    return CantidadOrdenPageModule;
}());
export { CantidadOrdenPageModule };
//# sourceMappingURL=cantidad-orden.module.js.map