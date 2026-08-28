import { Sequelize } from "sequelize";
import mongoose from 'mongoose';
import databaseConfig from '../config/database.cjs';
import User from '../app/models/User.js';
import Product from "../app/models/Product.js";
import Category from "../app/models/Category.js";

const models = [User, Product, Category];

class Database{
    constructor(){
     this.init();
     this.mongo();   
    }

    init(){
      this.conection = new Sequelize(databaseConfig);
      models.map((model)=> model.init(this.conection)).map(model => model.associate && model.associate(this.conection.models) );
    }
  mongo(){
    this.mongooseConnection = mongoose.connect('mongodb://Localhost:27017/devburguer',

    );
  }
}


export default new Database();