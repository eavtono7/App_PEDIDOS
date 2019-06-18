import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrdenarPage } from './ordenar.page';
var routes = [
    {
        path: '',
        component: OrdenarPage
    }
];
var OrdenarPageModule = /** @class */ (function () {
    function OrdenarPageModule() {
    }
    OrdenarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OrdenarPage]
        })
    ], OrdenarPageModule);
    return OrdenarPageModule;
}());
export { OrdenarPageModule };
//# sourceMappingURL=ordenar.module.js.map