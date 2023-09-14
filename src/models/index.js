"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const clothesModel = require("./clothes/model");
const foodModel = require("./food/model");
const Collection = require("./data-collection");
const userModel = require("../auth/models/users");
const todoModel = require("./Todo");

const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const todo = todoModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
    db: sequelize,
    food: new Collection(food),
    clothes: new Collection(clothes),
    users,
    usersCollection: new Collection(users),
    todo: new Collection(todo),
};
