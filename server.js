const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use('/', express.static('public'));

app.get('/api', function (req, res) {
    const sellerUsername = req.query.sellerUsername;
    const sellerCity = req.query.sellerCity;
    const sellerState = req.query.sellerState;
    const productName = req.query.productName;
    const productId = req.query.productId;
    const productPrice = req.query.productPrice;
    const productDescription = req.query.productDescription;

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