import axios from 'axios';
import Axios from 'axios'
import matter from 'gray-matter'

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:1337',
});

export const getAllBlogs =async ()=> {
  const res = await axiosInstance.get('/blogs')
  return res.data

}

export const getSingleBlog =async (title)=> {
  const res = await axiosInstance.get(`/blogs?title=${title}`)
  const { data, content } = matter(res.data[0].content)
  return {data,content,slug:res.data[0].title}
}