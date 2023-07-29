import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).where({ _partial: false }).find()

  const sitemap = new SitemapStream({
    // hostname: `https://${event.node.req.headers.host}`
    hostname: 'https://graveyard.dumchenko.family'
  })

  for (const doc of docs) {
    console.log(doc)
    const chunk = {
      url: doc._path,
      changefreq: 'monthly',
      img: []
    }

    if (doc.photos) {
      for (const photo of doc.photos) {
        chunk.img.push({
          url: `${doc._path}/${photo.path}`
        })
      }
    }

    sitemap.write(chunk)
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
