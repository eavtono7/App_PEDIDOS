import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
var NologinGuard = /** @class */ (function () {
    function NologinGuard(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    NologinGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFauth.authState.pipe(map(function (auth) {
            if (isNullOrUndefined(auth)) {
                return true;
            }
            else {
                _this.router.navigate(['/menu']);
                return false;
            }
            //console.log(auth);
            //return true;
        }));
    };
    NologinGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            Router])
    ], NologinGuard);
    return NologinGuard;
}());
export { NologinGuard };
//# sourceMappingURL=nologin.guard.js.map