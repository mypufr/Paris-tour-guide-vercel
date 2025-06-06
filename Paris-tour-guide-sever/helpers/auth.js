import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    // add salt value 
    bcrypt.genSalt(12, (err, salt) => {

      if (err) {
        reject(err)
      }

    // create hashed password
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err)
        }
        resolve(hash)
      })
    })
  })
}

export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed)
}

