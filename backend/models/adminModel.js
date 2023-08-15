import { query } from '../config/db.js'

// check if a user with the given email exists
const getCustomers = async (email) => {
  try {
    const userExistsQuery = `
    SELECT * from customer`
    const userExists = await query(userExistsQuery, [])
    console.log(userExists);

    return userExists.rowCount > 0 ?  userExists.rows[0]: false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

export default getCustomers