import firebird from "node-firebird";

const dbOptions = {
   host: '127.0.0.1',
   port: 3050,
   database: 'C:\\Elinfo\\Administrador\\Dados\\TESTE.FDB',
   user: 'SYSDBA',
   password: 'masterkey',
   lowercase_keys: false,
   role: null,
   pageSize: 4096 
};

function executeQuery(sql, params, callback){

    firebird.attach(dbOptions, function(err, db){
        if (err)
            return callback(err, []);
        
        db.query(sql, params, function(err, result){           
            db.detach();

            if (err){
                return callback(err, []);
            } else {
                return callback(undefined, result);
            }
        })
    })

}

export {executeQuery};