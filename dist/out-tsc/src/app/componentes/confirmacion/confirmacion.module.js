import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfirmacionPage } from './confirmacion.page';
var routes = [
    {
        path: '',
        component: ConfirmacionPage
    }
];
var ConfirmacionPageModule = /** @class */ (function () {
    function ConfirmacionPageModule() {
    }
    ConfirmacionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConfirmacionPage]
        })
    ], ConfirmacionPageModule);
    return ConfirmacionPageModule;
}());
export { ConfirmacionPageModule };
//# sourceMappingURL=confirmacion.module.js.map