import sanityClient from '@sanity/client';

// const client = sanityClient.withConfig({apiVersion: '2021-06-07'})

export default sanityClient({
  projectId: 'b9stqgf7',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v1',
});
// https://gist.github.com/ulises-codes/2228f7fb77ad37d3cebc82f4a1e885e5

// import sanityClient from '@sanity/client'
// import sanityImage from '@sanity/image-url'

// const options = {
//   projectId: 'eqlh3dcx',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2021-06-07'
// }

// const client = sanityClient(options)

// export const imageBuilder = sanityImage(client)

// export default client
