// nesse arquivo usamos o schema como se fosse o mongoose puro
// porém ao exportar esse módulo e usar ele no service, utilizamos as funções do EXPRESS
// por isso a utilização do node-resful, pois ele faz essa integração do moongose com o express

const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe a descrição do crédito'] },
    value: { type: Number, min: 0, required: true}
});

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true},
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min:1, max:12, required: true},
    year: { type:Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);