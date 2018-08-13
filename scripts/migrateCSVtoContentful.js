const csv = require('csvtojson')
const csvFilePath = './files/drugAZ.csv'
const contentfulImport = require('contentful-import')
const config = require('./config')

const importContent = {
  "contentTypes": [],
  "entries": [],
  "assets": [],
  "locales": [],
  "webhooks": [],
  "roles": [],
  "editorInterfaces": []
};

csv()
  .fromFile(csvFilePath)
  .then((data) => {
    createJSONOutput(data)
  })

createJSONOutput = (data) => {
  data.map(dataItem => {
    importContent.entries[importContent.entries.length] = {
      "sys": {
        "id": dataItem.Name.trim().replace(/[’'()]/g, '').replace(/[\s]+/g, '-').toLowerCase(),
        "publishedVersion": 1,
        "contentType": {
          "sys": {
            "id": "drugPage"
          }
        }
      },
      "fields": {
        "name": {
          "en-US": dataItem.Name
        },
        "synonyms": {
          "en-US": dataItem['Street names']
        },
        "description": {
          "en-US": dataItem['Mini Description whether it stimulant, depressant, hallucinogen, what it does, what it looks like [[ALL NEW CONTENT]]']
        },
        "slug": {
          "en-US": dataItem.Name.trim().replace(/[’'()]/g, '').replace(/[\s]+/g, '-').toLowerCase()
        }
      }
    };
  });

  const importOptions = {
    content: importContent,
    spaceId: config.contentful.spaceId,
    managementToken: config.contentful.managementToken,
    skipContentModel: true
  }
  contentfulImport(importOptions)
    .then(() => {
      console.log('Data imported successfully')
    })
    .catch((err) => {
      console.log('Oh no! Some errors occurred!', err)
    })
}
