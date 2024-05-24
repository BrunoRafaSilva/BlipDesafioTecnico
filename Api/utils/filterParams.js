/* eslint-disable max-len */
/**
 * Função que será utilizada para filtrar objeto por Propriedade e Valor
 * @author Bruno Silva @BrunoRafaSilva <bruno.rafael.lucena@gmail.com>
 * @param {String} property - Propriedade que será utilizado para filtro
 * @param {String} value - Valor que será utilizado para filtro
 * @returns {Function} - Função de filtro
 * @description Função que será utilizada para filtrar um objeto por Propriedade desejado, recebendo uma Propriedade e um valor experado
 * Qual Propriedade e Valor será utilizado para filtro, recebendo eles como argumentos.

 *  @example
    const data = await response.json();
        return data
            .filter(filterParam('language', 'C#'))
 */

export default (property, value) => (a) => a[property] === value;
