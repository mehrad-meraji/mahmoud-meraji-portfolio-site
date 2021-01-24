import S from "@sanity/desk-tool/structure-builder";

export default () =>
//creating our list with a title & an items array
  S.list()
    .title('Content')
    .items([
      //creating a list item
      //but filter out the config type
      // list out the rest of the document types,
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings', 'social'].includes(listItem.getId())),
      // add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title('Site settings')
        .child(
          //displaying out editor window using the siteSettings schema
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])
