// importar a dependencia do sqlite 3
const sqlite3 = require("sqlite3").verbose()

//criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados para nossas operações

// db.serialize(() => {
//     //criar uma tabela com comandos SQL
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // //inserir dados
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);`
    

//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     //     "Papersider",
//     //     "Rua João Ferreira dos Santos",
//     //     "Próximo ao Remidos",
//     //     "Paraíba",
//     //     "Pombal",
//     //     "Papéis e Papelão"

//     // ]

//     // function afterInsertData(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso!")
//     //     console.log(this)
//     // }

    
//     // db.run(query, values, afterInsertData)


//     //consultar dados na tabela
//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão os seus registros:")
//     //     console.log(rows)
//     // })
    


    // Deletar dados
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
// })