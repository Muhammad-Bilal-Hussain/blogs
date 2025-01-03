import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// const projectId = 'a8980emb'
// const dataset = 'production'
// const apiVersion = '2024-12-31'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
