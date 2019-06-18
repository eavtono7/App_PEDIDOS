import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetallePage } from './detalle.page';
var routes = [
    {
        path: '',
        component: DetallePage
    }
];
var DetallePageModule = /** @class */ (function () {
    function DetallePageModule() {
    }
    DetallePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetallePage]
        })
    ], DetallePageModule);
    return DetallePageModule;
}());
export { DetallePageModule };
//# sourceMappingURL=detalle.module.js.map