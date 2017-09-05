/*
 * @Author: zhanghuiming
 * @Date:   2017-09-05 08:05:21
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-05 14:27:52
 */
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from './components/Home'
let app = express()
app.use(express.static('public', {
	etag: true,
	maxAge: 604800000
}))
app.set('views', './views')
app.set('view engine', 'jade')
let html = ReactDOMServer.renderToString(<Home/>)
app.get('/', (req, res) => {
	res.render('index', {
		react: html
	})
})
app.listen(3000, () => {
	console.log('listen on 3000')
})