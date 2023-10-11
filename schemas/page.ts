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
      name: 'url',
      type: 'reference',
      to: [{type: 'urlPath'}],
      title: 'Url',
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
