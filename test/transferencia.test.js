import { expect } from 'chai';
import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();
import { obterToken } from '../helpers/autenticacao.js';
import postTransferencias from '../fixtures/postTransferencias.json' assert { type: 'json' };

describe('Transferencias', () => {
    let token

    beforeEach(async () => {

        token = await obterToken('julio.lima', '123456')

    })
    describe('POST /transferencias', async() => {
        let token

        beforeEach(async () => {

            token = await obterToken('julio.lima', '123456')

        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias}
            bodyTransferencias.valor = 7
            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}` )
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 10,
                    token: ""
                })
            expect(response.status).to.equal(201);
            console.log(response.body)
        })
        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de 10 reais', async () => {
            const token = await obterToken('julio.lima', '123456')

            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 9.99,
                token: ""
            })
            expect(response.status).to.equal(422);
            console.log(response.body)
        })
    })

    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso 200 e dados iguais ao degistro de transferencias contigos no bano de dado quando o id for valido', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias/1')
                .set('Authorization', `Bearer ${token}`)
            console.log(response.status)
            console.log(response.body)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(1)
            expect(response.body.id).to.be.a('number')
            expect(response.body.conta_origem_id).to.equal(1)
            expect(response.body.conta_destino_id).to.equal(2)
            expect(response.body.valor).to.equal(10.00)

        })
        
    })

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).to.equal(200)
            expect(response.body.limit).to.equal(10)
            expect(response.body.transferencias).to.have.lengthOf(10)
        })
    })

})