import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
var AuthGuard = /** @class */ (function () {
    function AuthGuard(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFauth.authState.pipe(map(function (auth) {
            if (isNullOrUndefined(auth)) {
                _this.router.navigate(['/home']);
                return false;
            }
            else {
                return true;
            }
            //console.log(auth);
            //return true;
        }));
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map