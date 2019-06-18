import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [NologinGuard] },
    { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
    { path: 'pedido', loadChildren: './pedido/pedido.module#PedidoPageModule' },
    { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },
    { path: 'envio', loadChildren: './envio/envio.module#EnvioPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map