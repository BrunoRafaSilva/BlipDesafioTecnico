/* eslint-disable camelcase */
/**
 * Função que irar mapear propriedades de um objeto e retornar somente as solicitadas
 * @author Bruno Silva @BrunoRafaSilva <bruno.rafael.lucena@gmail.com>
 * @param {Array} params - Parametros que serão utilizados para mapeamento do objeto
 * @returns {Function} - Função de mapeamento
 * @description Função que irar mapear propriedades de um objeto e retornar somente as solicitadas,
    recebendo um ou varios parametros que serão utilizados para mapeamento
 * @example
    const data = await response.json();
        return data
            .map(mapPropertys('full_name', 'description', 'created_at', 'language'))
 */

export default (...params) => (obj) => params.reduce((acc, param) => {
    if (param in obj) {
        acc[param] = obj[param];
    }
    return acc;
}, {});
