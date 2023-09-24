import type {StructureResolver} from 'sanity/lib/exports/desk'
import {DocumentIcon, EarthGlobeIcon} from '@sanity/icons'

export const structure: StructureResolver = async (S, context) => {
  const LANGS = await context.getClient({
    apiVersion: '2021-10-21'
  }).fetch('*[_type == "lang"]')


  return S.list()
    .title('Tobermory wave adventure')
    .items(
      [
        S.listItem()
          .title('Langs')
          .icon(EarthGlobeIcon)
          .child(S.documentTypeList('lang').title('Langs')),
        S.listItem()
          .title('Pages')
          .icon(DocumentIcon)
          .child(S.list()
            .title('Pages')
            .items(LANGS.map(( lang: any ) => S.listItem()
                .title(`${lang.title} pages`)
                .icon(DocumentIcon)
                .child(S.documentTypeList('page').filter(`_type == "page" && lang._ref == "${lang._id}"`)
                )
              )
            )
          )
      ]
    )
}

