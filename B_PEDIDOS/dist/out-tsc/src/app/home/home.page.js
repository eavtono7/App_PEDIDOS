import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
var HomePage = /** @class */ (function () {
    function HomePage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomePage.prototype.OnsubmitLogIn = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function (res) {
            _this.router.navigate(['/menu']);
        }).catch(function (error) { return alert('Datos Incorrectos o usuario inexistente'); });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map