import { Pool, Client }  from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_list',
    password: '647484',
    port: 5432,
  })
/*  
pool.query('SELECT * FROM TASK', (err, res) => {
    console.log(err, res)
  })
*/
export const getAllTasks = (request:any, response:any) => {
pool.query('SELECT * FROM task', (error, results) => {
    if (error) {
    throw error
    }
    response.status(200).json(results.rows)
})
}

export const getTaskById = (request:any, response:any) => {

  pool.query(`select * from task where id = '${request.params.id}'` , (error, results) => {
      if (error) {
      console.log('ERRO',error)//throw error
      }
      response.status(200).json(results.rows)
  })
  }
