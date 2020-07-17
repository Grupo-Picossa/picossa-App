'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Products', [{
            id: 1,
            descripcion: "Babydoll Rojo",
            referencia: "H34",
            talla: "L",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 2,
            descripcion: "Babydoll Rojo",
            referencia: "H34",
            talla: "XL",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 3,
            descripcion: "Babydoll Rojo",
            referencia: "H34",
            talla: "XXL",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Products', null, {});

    }
};