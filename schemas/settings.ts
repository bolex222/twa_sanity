import {Rule, SchemaValidationValue} from 'sanity'
import { CogIcon } from '@sanity/icons'

export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  icon: CogIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule): SchemaValidationValue => rule.required()
    },
    {
      name: 'defaultLanguage',
      type: 'reference',
      to: [{type: 'lang'}],
      title: 'Default language',
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
    },
  ]
}
