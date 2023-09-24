import {Rule, SchemaValidationValue} from 'sanity'

export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule): SchemaValidationValue => rule.required()
    },
    {
      name: 'todoList',
      type: 'array',
      of: [
        {type: 'todo'}
      ]
    }
  ]
}
