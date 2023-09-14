// models/Todo.js
const User = require("../auth/models/users");
("use strict");

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assigne: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    });

    return Todo;
};
