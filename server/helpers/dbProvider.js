const Nano = require('nano')
module.exports = (req, res, next) => {
  const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST
  } = process.env

  const nano = Nano(`http://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`)

  setupDatabases(nano)

  req.db = nano
  next()
}

const setupDatabases = async ({db}) => {
  await db
    .get('graffiti')
    .catch(async (err) => {
      await db.create('graffiti')
    })
}
