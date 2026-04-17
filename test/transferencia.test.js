import { expect } from 'chai';
import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10 reais', async () => {
            const responseLogin = await request(process.env.BASE_URL)
                            .post('/login')
                            .set('Content-Type', 'application/json')
                            .send({
                                username: 'julio.lima',
                                senha: '123456'
                            });
            const token = responseLogin.body.token

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
            const responseLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: '123456'
                });
            const token = responseLogin.body.token

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

})