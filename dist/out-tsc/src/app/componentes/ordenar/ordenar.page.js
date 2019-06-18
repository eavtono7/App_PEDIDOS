import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var OrdenarPage = /** @class */ (function () {
    function OrdenarPage(router) {
        this.router = router;
    }
    OrdenarPage.prototype.ngOnInit = function () {
    };
    OrdenarPage.prototype.VolverHome = function () {
        this.router.navigate(['/home']);
    };
    OrdenarPage = tslib_1.__decorate([
        Component({
            selector: 'app-ordenar',
            templateUrl: './ordenar.page.html',
            styleUrls: ['./ordenar.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], OrdenarPage);
    return OrdenarPage;
}());
export { OrdenarPage };
//# sourceMappingURL=ordenar.page.js.map