import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChachasService } from "../../servicios/chachas.service";
//import { chachaobj } from "../../modelos/chacha";
var MenuPage = /** @class */ (function () {
    function MenuPage(router, chachasservice) {
        this.router = router;
        this.chachasservice = chachasservice;
        this.chachaslist = [];
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.chachasservice.getChachas().subscribe(function (chachas) {
            _this.chachaslist = chachas;
        });
    };
    MenuPage.prototype.VolverHome = function () {
        this.router.navigate(['/home']);
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ChachasService])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map