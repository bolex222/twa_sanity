import {Rule, SchemaValidationValue} from 'sanity'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
      description: 'The title of the page',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
    },
    {
      name: 'lang',
      type: 'reference',
      to: [{type: 'lang'}],
      title: 'Lang',
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text',
    }
  ]
}
