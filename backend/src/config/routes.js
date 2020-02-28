const express = require('express');

module.exports = function(server) {
    //Definir URL base
    const router = express.Router();
    server.use('/api', router);

    // Rotas de ciclo de pagamento
    // Chamando o metodo de registrar do node-restful para não precisar mapear cada método (get, post...)

    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');
}