import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { getAllBlogs } from '../http/http'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
     
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const blogs = await getAllBlogs()
  return {
    props: {
      allPosts: blogs.map(v => ({
        title: v.title,
        slug: v.title,
        content: v.content,
        author: 'czz',
        excerpt: "123",
        coverImage: "/assets/blog/dynamic-routing/cover.jpg",
        date: v.updated_at
      }))
    },
  }
}
