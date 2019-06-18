import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PedidosService } from "../../servicios/pedidos.service";
var PedidoPage = /** @class */ (function () {
    function PedidoPage(pedidoService) {
        this.pedidoService = pedidoService;
        this.ubicaciones = pedidoService.getMotos();
    }
    PedidoPage.prototype.ngOnInit = function () {
    };
    PedidoPage.prototype.registrandoPedido = function () {
        this.pedidoService.registrarPedido("hola", "hola", 1, 1).then(function (res) {
        });
    };
    PedidoPage = tslib_1.__decorate([
        Component({
            selector: 'app-pedido',
            templateUrl: './pedido.page.html',
            styleUrls: ['./pedido.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PedidosService])
    ], PedidoPage);
    return PedidoPage;
}());
export { PedidoPage };
//# sourceMappingURL=pedido.page.js.map