const express = require('express')
const app = express()

const path = require('path')
const url = require('url')


app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res)=>{


  const pathName = url.parse(req.url, true).pathname
  let filePath = path.join(__dirname, 'view', pathName)

  if(pathName === '/')
    filePath = path.join(__dirname, 'view', 'index.html')

  res.sendFile(filePath)
  
})


app.listen(5700, ()=>{
  console.log("Server is running @ http://localhost:5700")
})