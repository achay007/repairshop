import {db} from './index'
import {migrate} from 'drizzle-orm/neon-http/migrator'

const main = async () => {
    try{
        await migrate(db,{
            migrationsFolder: 'src/db/migrations',
        })
        console.log('migration completed')
    }catch(err){
        console.log("error during migration",err)
        process.exit(1)
    }
}
main()