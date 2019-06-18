import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
var ChachasService = /** @class */ (function () {
    function ChachasService(db) {
        this.db = db;
    }
    ChachasService.prototype.getChachas = function () {
        return this.db.collection('chachas').snapshotChanges().pipe(map(function (chachastipos) {
            return chachastipos.map(function (a) {
                var data = a.payload.doc.data();
                data.id_chacha = a.payload.doc.id;
                return data;
            });
        }));
    };
    ChachasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], ChachasService);
    return ChachasService;
}());
export { ChachasService };
//# sourceMappingURL=chachas.service.js.map