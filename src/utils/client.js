import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'hmbjkzjq',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-19',
});
