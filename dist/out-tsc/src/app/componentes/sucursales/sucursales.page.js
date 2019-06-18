import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
//import { sucursalobj } from "../../modelos/sucursal";
var SucursalesPage = /** @class */ (function () {
    function SucursalesPage(router) {
        this.router = router;
    }
    SucursalesPage.prototype.ngOnInit = function () {
    };
    SucursalesPage.prototype.VolverHome = function () {
        this.router.navigate(['/home']);
    };
    SucursalesPage = tslib_1.__decorate([
        Component({
            selector: 'app-sucursales',
            templateUrl: './sucursales.page.html',
            styleUrls: ['./sucursales.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], SucursalesPage);
    return SucursalesPage;
}());
export { SucursalesPage };
//# sourceMappingURL=sucursales.page.js.map