const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

// Bodyparser
app.use(bodyParser.json());

// Static HTML Page
app.use('/', express.static('public'));

app.post('/api', function (req, res) {
    const sellerUsername = req.body.sellerUsername;
    const sellerCity = req.body.sellerCity;
    const sellerState = req.body.sellerState;
    const productName = req.body.productName;
    const productId = req.body.productId;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;

    const reply = `${sellerUsername} from ${sellerCity}, ${sellerState} is selling ${productName} ${productId} for ${productPrice}. Here is a description of ${productName}: ${productDescription}`
    res.send(reply);
    
    // Enter in url to test
    // https://careerdevstm-tmartinez114.c9users.io/api?sellerUsername=Arnell&sellerCity=Providence&sellerState=RI&productName=iPhone&productID=0001&productPrice=5000&productDescription=Selling%20my%20iphone
})

app.get('/showprofile:username', function (req, res) {
    const user = req.params.sellerUsername;
    console.log(user);
    res.send('showprofile working');
})


app.listen(port, () => console.log(`E-Commerce app is listening on port ${port}`));