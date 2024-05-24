/* eslint-disable no-unused-vars */
export default async function errorMidleware(err, req, res, next) {
    res.status(500).send({ ok: 'false', message: err.message });
}
