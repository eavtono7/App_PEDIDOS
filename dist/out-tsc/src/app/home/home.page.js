import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
    }
    HomePage.prototype.IrASucursales = function () {
        this.router.navigate(['/sucursales']);
    };
    HomePage.prototype.IrAMenu = function () {
        this.router.navigate(['/menu']);
    };
    HomePage.prototype.IrAOrdenar = function () {
        this.router.navigate(['/pedido']);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map