import type {StructureResolver} from 'sanity/lib/exports/desk'
import {DocumentIcon, CogIcon, WarningFilledIcon, TranslateIcon} from '@sanity/icons'

export const structure: StructureResolver = async (S, context) => {

  const LANGS = await context.getClient({
    apiVersion: '2021-10-21'
  }).fetch('*[_type == "lang"]')

  const renderSettingsRow = async () => {
    const Settings = await context.getClient({
      apiVersion: '2021-10-21'
    }).fetch('*[_type == "settings"][0]')

    return Settings?._id ?
      S.documentListItem()
        .schemaType('settings')
        .id(Settings._id)
        .icon(CogIcon)
        .title('Settings')
      : S.listItem().title('NO SETTINGS FOUNDED').icon(WarningFilledIcon).child(
        S.documentTypeList('settings').title('⚠️ no setting please create one')
      )
  }

  return S.list()
    .title('Tobermory wave adventure')
    .items(
      [
        await renderSettingsRow(),
        S.listItem()
          .title('Langs')
          .icon(TranslateIcon)
          .child(S.documentTypeList('lang').title('Langs').showIcons(true)),
        S.listItem()
          .title('Pages')
          .icon(DocumentIcon)
          .child(S.list()
            .title('Pages')
            .items(
              [...LANGS.map((lang: any) => S.listItem()
                .title(`${lang.title} pages`)
                .icon(DocumentIcon)
                .child(S.documentTypeList('page').filter(`_type == "page" && lang._ref == "${lang._id}"`)
                )
              ),
                S.listItem()
                  .title('All pages')
                  .icon(DocumentIcon)
                  .child(S.documentTypeList('page').filter('_type == "page"')
                  )]
            )
          )
      ]
    )
}

