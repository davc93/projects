// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import allData from './data'

class Database {
  constructor() {}

  getAll() {
    const asArray = Object.values(allData)
    return asArray
  }

}


export default Database