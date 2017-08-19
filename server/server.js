import express from 'express';
// import {
//   graphqlExpress,
//   graphiqlExpress,
// } from 'graphql-server-express';
//import bodyParser from 'body-parser';
import cors from 'cors';
//import { schema } from './src/schema';
//import { postgraphql, createPostGraphQLSchema, withPostGraphQLContext } from 'postgraphql';
import { Pool } from 'pg';

const server = express();
const PORT = 4000;

const pgPool = new Pool({
  database: 'adventureworks',
  user: 'tracey',
  password: 'password',
  host: 'localhost',
  port: 5432, 
  postgraphql: {
    schema: 'person',
    
  }
});

server.use('*', cors({ origin: 'http://localhost:3000' }));

server.get('/person', function(req, res){
  pgPool.query('Select * from person.person limit 100').then(function(data){
    console.log(data);
    res.send(data);
  }, function(err){res.send(500,{error: err})})
});




// pgPool.query('Select * from person.person').then(people => {
//   console.log(people.rows[0]);
// })

 



// server.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema
// }));

// server.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql' 
// }));

// server.use(postgraphql('postgres://tracey:password@localhost:5432/adventureworks'));

// server.get('/', function (req, res) {
//   res.send('Hello World!')
// })

//server.listen(3000)

//const pgsql = postgraphql(pgpool);
// server.use(pgsql);
//server.listen(3000);
 
server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphiql`)
);