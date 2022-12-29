const { Client } =require('redis-om')

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL

  async function runclient ()
{

    try
    {
        client = await new Client().open(url)
        console.log("Redis Db Connected")

    }
    catch(error)
    {
        console.log(error)

    }

return client
}

module.exports.runclient=runclient



