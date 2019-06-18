import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { PedidosService } from "../servicios/pedidos.service";
var MenuPage = /** @class */ (function () {
    function MenuPage(authservice, pedidoService) {
        this.authservice = authservice;
        this.pedidoService = pedidoService;
        this.Pedido = [];
        this.chachas = [];
    }
    MenuPage.prototype.OnLogOut = function () {
        this.authservice.logout();
    };
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pedidoService.getPedido().subscribe(function (peds) {
            _this.Pedido = peds;
        });
        this.pedidoService.getchachas().subscribe(function (chacs) {
            _this.chachas = chacs;
        });
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, PedidosService])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map