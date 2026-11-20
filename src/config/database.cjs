module.exports ={
  dialect: process.env.DB_DIALECT,
  host:  process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE ,
  define:{
    timestamps: true,
    underscored: true,
    underscoredALL: true,
}
}

//timestamps:true- Usuário e data de criação e atualização
// underscored:true- Nome das tabelas e colunas com underline
// underscoredALL:true- Nome das tabelas e colunas com underlines