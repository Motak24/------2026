import mysql2 from 'mysql2'
export const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'demo_isip_32'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

