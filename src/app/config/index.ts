import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.join((process.cwd(), '.env'))})

export default{
    port: process.env.PORT,
    database_uri: process.env.DATABASE_URI,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    secret_key: process.env.SECRET_KEY,
    expire_time: process.env.EXPIRES_IN
}