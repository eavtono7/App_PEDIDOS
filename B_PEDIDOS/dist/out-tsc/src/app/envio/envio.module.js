import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EnvioPage } from './envio.page';
var routes = [
    {
        path: '',
        component: EnvioPage
    }
];
var EnvioPageModule = /** @class */ (function () {
    function EnvioPageModule() {
    }
    EnvioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EnvioPage]
        })
    ], EnvioPageModule);
    return EnvioPageModule;
}());
export { EnvioPageModule };
//# sourceMappingURL=envio.module.js.map