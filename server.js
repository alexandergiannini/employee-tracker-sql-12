const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Tenniskid1',
  database: 'work_db'
});

connection.connect(err => {
    if (err) throw err;
   // console.log('connected as id ' + connection.threadId);
    showAllDepartments();
    showAllRoles();
  });

  showAllDepartments = () => {
    connection.query(
      'SELECT * FROM department;',
      function (err, results, fields) {
        if (err) {
          throw err
        } else {
          console.log(results)
          //return results
        }
      }
  
    )

 showAllRoles = () => {
    connection.query(
        'SELECT * FROM role;',
        function (err, results, fields) {
            if (err) {
                throw err
            } else {
                console.log(results)
            }
        }
    )
}


//connection.end(); using this temporarily
    
};

 
  module.exports = connection
  module.exports = showAllDepartments
  //module.exports = showAllRoles ///need to fix this
  
  