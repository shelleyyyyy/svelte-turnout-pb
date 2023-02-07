migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ebbyh4drduj2byz")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ebbyh4drduj2byz")

  collection.createRule = null

  return dao.saveCollection(collection)
})
