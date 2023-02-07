migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ebbyh4drduj2byz")

  collection.listRule = "id = @request.auth.id"
  collection.createRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ebbyh4drduj2byz")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
