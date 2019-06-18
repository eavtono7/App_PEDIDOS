import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
var PedidosService = /** @class */ (function () {
    function PedidosService(db) {
        this.db = db;
    }
    PedidosService.prototype.getPedido = function () {
        return this.db.collection('Pedido').snapshotChanges().pipe(map(function (pedido) {
            return pedido.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    PedidosService.prototype.getchachas = function () {
        return this.db.collection('chachas').snapshotChanges().pipe(map(function (chac) {
            return chac.map(function (b) {
                var data = b.payload.doc.data();
                data.id = b.payload.doc.id;
                return data;
            });
        }));
    };
    PedidosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], PedidosService);
    return PedidosService;
}());
export { PedidosService };
//# sourceMappingURL=pedidos.service.js.map