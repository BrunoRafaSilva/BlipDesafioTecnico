/* eslint-disable max-len */
/**
 * Função que será utilizada para ordenar objeto por data
 * @author Bruno Silva @BrunoRafaSilva <bruno.rafael.lucena@gmail.com>
 * @param {String} property - Parametro que será utilizado para ordenação
 * @returns {Function} - Função de ordenação
 * @description Função que será utilizada para ordenar um objeto por data, recebendo como parametro: qual propriedade será utilizado para ordenação, recebendo ele como argumento e retornando ordenado

 *  @example
    const data = await response.json();
        return data
            .sort(sortOrderDate('created_at'))
 */
export default (property) => (a, b) => new Date(a[property]) - new Date(b[property]);
