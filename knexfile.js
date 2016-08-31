// Update with your config settings.
// this is the database that runs on your
// local computer
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/hogwarts'
  }
  //
  //production: {
  //  client: 'pg',
  //  connection: {
  //    database: 'hogwarts'
  //  },
  //  pool: {
  //    min: 2,
  //    max: 10
  //  },
  //  migrations: {
  //    tableName: 'knex_migrations'
  //  }
  //}
};
