import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PedidosService } from "../servicios/pedidos.service";
var EnvioPage = /** @class */ (function () {
    function EnvioPage(pedidoservice) {
        this.pedidoservice = pedidoservice;
        this.Pedido = [];
    }
    EnvioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pedidoservice.getPedido().subscribe(function (peds) {
            _this.Pedido = peds;
        });
    };
    EnvioPage = tslib_1.__decorate([
        Component({
            selector: 'app-envio',
            templateUrl: './envio.page.html',
            styleUrls: ['./envio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PedidosService])
    ], EnvioPage);
    return EnvioPage;
}());
export { EnvioPage };
//# sourceMappingURL=envio.page.js.map