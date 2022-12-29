const restify = require('restify');

const { Entity, Schema,Client } = require('redis-om');
const server = restify.createServer();

server.use(restify.plugins.bodyParser());

const { envFileRepository } =require("./schema/env_schema")


server.post("/set-env",async(req,res)=>
{

    console.log(req.body)

    const env_repo=await envFileRepository()
    // await env_file.createIndex()
    // let env_file = await env_repo.createEntity()
    // env_file.MicrosoftAppType=req.body.MicrosoftAppType
    // env_file.MicrosoftAppTenantId=req.body.MicrosoftAppTenantId

    const id = await env_repo.createAndSave(req.body) // '01FJYWEYRHYFT8YTEGQBABJ43J'


    res.send(id)

})








server.listen(5000, () => {
    console.log('API server listening on port 5000');
  });