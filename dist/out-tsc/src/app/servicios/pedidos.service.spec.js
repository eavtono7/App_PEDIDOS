import { TestBed } from '@angular/core/testing';
import { PedidosService } from './pedidos.service';
describe('PedidosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PedidosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=pedidos.service.spec.js.map