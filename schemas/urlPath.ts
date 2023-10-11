import {Rule, SchemaValidationValue} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default {

  name: 'urlPath',
  type: 'document',
  title: 'UrlPath',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule): SchemaValidationValue => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule: Rule): SchemaValidationValue => rule.required()
    }
  ]
}
