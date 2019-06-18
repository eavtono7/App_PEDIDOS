import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
var AuthService = /** @class */ (function () {
    function AuthService(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, rejected) {
            _this.AFauth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) { return rejected(error); });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.AFauth.auth.signOut().then(function () {
            _this.router.navigate(['/home']);
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map