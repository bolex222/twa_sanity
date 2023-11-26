import {Rule, SchemaValidationValue} from 'sanity'

export default {
  name: 'heroSection',
  type: 'document',
  title: 'HeroSection',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule): SchemaValidationValue => rule.required(),
      description: 'The title of the page',
    },
    {
      name: 'paragraph',
      type: 'string',
      title: 'Paragraph',
      description: 'Paragraph ',
    }
  ]
}
