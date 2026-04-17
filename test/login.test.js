import { expect } from 'chai';
import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();
import postLogin from '../fixtures/postLogin.json' assert { type: 'json' };

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string', async () => {
            const bodyLogin = { ...postLogin}
            const response = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin);
            
            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        });
    });
});