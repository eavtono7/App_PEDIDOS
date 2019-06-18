import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuOrdenPage } from './menu-orden.page';
var routes = [
    {
        path: '',
        component: MenuOrdenPage
    }
];
var MenuOrdenPageModule = /** @class */ (function () {
    function MenuOrdenPageModule() {
    }
    MenuOrdenPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenuOrdenPage]
        })
    ], MenuOrdenPageModule);
    return MenuOrdenPageModule;
}());
export { MenuOrdenPageModule };
//# sourceMappingURL=menu-orden.module.js.map