import {Rule, SchemaValidationValue} from 'sanity'
import { TranslateIcon } from '@sanity/icons'

export default {
  name: 'lang',
  type: 'document',
  title: 'Lang',
  icon: TranslateIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule): SchemaValidationValue => rule.required()
    },
    {
      name: 'url',
      type: 'reference',
      to: [{type: 'urlPath'}],
      title: 'Url',
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
    }
  ]
}
