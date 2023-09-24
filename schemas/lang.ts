import {Rule, SchemaValidationValue} from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export default {
  name: 'lang',
  type: 'document',
  title: 'Lang',
  icon: EarthGlobeIcon,
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
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
      // readOnly: true,
    },
  ]
}
