const  {Entity, Schema, Client, Repository,redis}=require('redis-om')

class Envfile extends Entity {}
let schema = new Schema(Album, {
  artist: { type: 'string' },
  title: { type: 'string' },
  year: { type: 'number' },
  genres: { type: 'array' },
  outOfPublication: { type: 'boolean' }
})

let client = new Client()
await client.open('redis://localhost:6379')

let repository = new Repository(schema, client)

let album, id

// create an entity and save it
album = repository.createEntity()

album.artist = "Mushroomhead"
album.title = "The Righteous & The Butterfly"
album.year = 2014
album.genres = [ 'metal' ]
album.outOfPublication = true

id = await repository.save(album) // '01FJYWEYRHYFT8YTEGQBABJ43J'

// read an entity
album = await repository.fetch('01FJYWEYRHYFT8YTEGQBABJ43J')

// update an entity
album.genres = [ 'metal', 'nu metal', 'avantgarde' ]
album.outOfPublication = false

id = await repository.save(album) // '01FJYWEYRHYFT8YTEGQBABJ43J'

// delete an entity
await repository.remove('01FJYWEYRHYFT8YTEGQBABJ43J')

let albums = await repository.search()
  .where('artist').equals('Mushroomhead')
  .and('title').matches('butterfly')
  .and('year').is.greaterThan(2000).returnAll()