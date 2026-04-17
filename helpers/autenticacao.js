import request from 'supertest';

export const obterToken = async (user, pw) => {
    const responseLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            username: user,
            senha: pw
        });

    return responseLogin.body.token;
};