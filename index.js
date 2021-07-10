const express = require('express')
require('./db/connection')
const { Blog, Author } = require('./db/model')
const app = express()

app.get('/', async (req, res) => {
  const user = await Author.find()
  res.json(user)
})

app.get('/add-user', async (req, res) => {
  const data = {
    name: 'kevin',
    email: 'peeraphat@zimpligital.com'
  }
  const result = await Author.create(data)
  res.json(result)
})

app.get('/add-blog', async (req, res) => {
  const data = {
    title: 'My first blog',
    body: 'this is a body',
    author: '60e96e5b914fe4190019b68e'
  }
  const result = await Blog.create(data)
  res.json(result)
})

app.get('/blog', async (req, res) => {
  const blog = await Blog.find().populate('authors')
  res.json(blog)
})

app.get('/user', async (req, res) => {
  const userId = '60e96e5b914fe4190019b68e'
  const user = await Author.findOne({ _id: userId }).populate('posts')
  res.json(user)
})

app.listen('8080', () => console.log('server running at http://localhost:8080'))