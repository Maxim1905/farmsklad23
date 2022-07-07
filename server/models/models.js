const sequelize = require('../db')

const { DataTypes } = require("sequelize")


const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Basket = sequelize.define('basket', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProduct = sequelize.define('basket_product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Product = sequelize.define('product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false },
	manufacturer: { type: DataTypes.STRING },
	releaseForm: { type: DataTypes.STRING },
	methodOfApplication: { type: DataTypes.STRING },
	storageConditions: { type: DataTypes.STRING },
	activeSubstance: { type: DataTypes.STRING },
	dosage: { type: DataTypes.STRING },
	expirationDate: { type: DataTypes.STRING },
	country: { type: DataTypes.STRING },
})

const Type = sequelize.define('type', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

// Описываем отношения типов

User.hasOne(Basket) // связь пользователя и корзины один к одному
Basket.belongsTo(User) // корзина принадлежит пользователю 

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)


module.exports = {
	User,
	Basket,
	BasketProduct,
	Product,
	Type,
}