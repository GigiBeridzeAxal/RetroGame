const express = require('express')
const app = express()
const axios = require('axios')


app.use('/' , require('./routes/MainRoutes'))


app.get('/proxy', async (req, res) => {
    try {
      const fileUrl = req.query.url;
      console.log(fileUrl)
      const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });

      // Set headers to handle CORS and send the file back to the browser
      res.set('Content-Type', response.headers['content-type']);
      res.set('Content-Disposition', 'attachment; filename="pokemonfirered.gba"');
      res.send(response.data);

    } catch (error) {
        console.log(error)
      res.status(500).send('Error fetching the file');
    }
  });


app.listen(4000 , () => console.log("Server Succesfuly Started"))