import { type SchemaTypeDefinition } from 'sanity'
// import { author } from '@/sanity/schemaTypes/author'
import { school } from '@/sanity/schemaTypes/school'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [school],
}
