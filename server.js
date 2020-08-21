const express = require('express');
const articleRouter = require('./routes/article')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res)=>{
    const articles = [{
        title: "test article",
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: "test article 2",
        createdAt: new Date(),
        description: 'Test Description'
    }]
    res.render('articles/index', {articles: articles})
})

app.listen(5000)

