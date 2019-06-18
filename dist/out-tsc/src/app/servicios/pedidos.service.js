import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var PedidosService = /** @class */ (function () {
    function PedidosService(db) {
        this.db = db;
    }
    PedidosService.prototype.registrarPedido = function (nombreMoto, apellidoMoto, latitudMoto, longitudMoto) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection('pedido').doc('b').set({
                UIDMotoTaxi: _this.asignacionMoto(_this.ubicaciones),
                nombreMototaxi: nombreMoto,
                apellidoMotoTaxi: apellidoMoto,
                entregado: false,
                latitud: latitudMoto,
                longitud: longitudMoto,
            });
            alert("Pedido realizado");
        });
    };
    PedidosService.prototype.getMotos = function () {
        var _this = this;
        this.listaUbicaciones = this.db.collection('motoTaxis');
        //Cargando datos de firebase
        this.ubicaciones = this.listaUbicaciones.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
        this.ubicaciones.subscribe(function (ubicaciones) {
            console.log('ubicaciones de los conductores: ', ubicaciones);
            console.log(_this.asignacionMoto(ubicaciones));
        });
        return this.ubicaciones;
    };
    PedidosService.prototype.asignacionMoto = function (ubicaciones) {
        var motosDistancias = [];
        var sucursal = new google.maps.LatLng(-17.3921318, -66.2234896);
        for (var _i = 0, ubicaciones_1 = ubicaciones; _i < ubicaciones_1.length; _i++) {
            var loc = ubicaciones_1[_i];
            if (loc.latitud != null && loc.disponible === false) {
                var latLng = new google.maps.LatLng(loc.latitud, loc.longitud);
                var total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal);
                console.log('La distancia del conductor ' + loc.apellidoMotoTaxi + ' ' + loc.uid + ' es ' + total + ' metros');
                motosDistancias.push(total);
            }
        }
        var moto = null;
        var min = Math.min.apply(null, motosDistancias);
        for (var _a = 0, ubicaciones_2 = ubicaciones; _a < ubicaciones_2.length; _a++) {
            var loc = ubicaciones_2[_a];
            if (loc.latitud != null && loc.disponible === false) {
                var latLng = new google.maps.LatLng(loc.latitud, loc.longitud);
                var total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal);
                if (total === min) {
                    moto = loc.uid;
                }
            }
        }
        console.log('La menor distancia es ' + min + ' de ' + moto);
        return moto;
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