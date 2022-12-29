const { Entity, Schema,Client,Repository} = require('redis-om');
const {runclient} = require ('../client')

class Envfile extends Entity {}



const EnvfileSchema =new Schema(Envfile, {

    MicrosoftAppType:{ type: 'string' },
    MicrosoftAppTenantId:{ type: 'string' }
    // MicrosoftAppId:{ type: 'string' },
    // MicrosoftAppPassword:{ type: 'string' },
    // AllowedCallers:{ type: 'string' },
    // ROOT_BOT_ID:{ type: 'string' },
    // BASE_URL:{ type: 'string' },
    // QLIK_HOSTNAME:{ type: 'string' },
    // QLIK_APP_ID:{ type: 'string' },
    // QLIK_API_KEY:{ type: 'string' },
    // QLIK_WEB_INTEGRATION_ID:{ type: 'string' }

  })

  async function envFileRepository() {

   const client=await runclient()



  const repository = client.fetchRepository(EnvfileSchema);
  // await envFileRepository.createIndex();
  return repository;
}
module.exports.envFileRepository=envFileRepository


