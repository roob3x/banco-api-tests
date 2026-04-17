import request from 'supertest';
import postLogin from '../fixtures/postLogin.json' assert { type: 'json' };

export const obterToken = async (user, pw) => {
    const bodyLogin = {...postLogin}
    const responseLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin);

    return responseLogin.body.token;
};