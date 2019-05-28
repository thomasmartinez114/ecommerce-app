/* global axios */

function getSellerInfo() {
    const input = document.getElementById('sellerUsername').value
    console.log(input);
    axios.get(`/showprofile/ ${input}`)
        .then(response => {
            document.getElementById('sellerInfo').innerHTML = response.data;
        })
}