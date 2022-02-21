'use strict';

const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Characters', [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin":"Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
     
  }
};
