const mysql2 = require('mysql2');

//create connection
const connection=mysql2.createConnection({
    host: 'hiteshcloud.cfsaadcxmj52.us-east-1.rds.amazonaws.com',
    user: 'hiteshbishnoi',
    port: '3306',
    password: 'hiteshbishnoi',

    database: 'kannadakoota'
});

module.exports=connection;
