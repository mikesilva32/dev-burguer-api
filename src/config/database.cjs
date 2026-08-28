module.exports ={
  dialect: 'postgres',
  host: 'localhost',
  port:5432,
  username: 'admin',
  password: '880130',
  database: 'dev-burguer-db',
  define:{
    timestamps: true,
    underscored: true,
    underscoredALL: true,
}
}

//timestamps:true- Usuário e data de criação e atualização
// underscored:true- Nome das tabelas e colunas com underline
// underscoredALL:true- Nome das tabelas e colunas com underlines