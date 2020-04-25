const request = require('request')
const rp = require('request-promise')
const sha256 = require('crypto-js/sha256')

const paymentLink = async () => {
    const urlGen = `https://ssl.dotpay.pl/test_seller/api/v1/accounts/705163/payment_links/`
    const pin = 'CJqaCDxhztHIBvP8Wm0HdYKc04Ug4rRN'

    let data_to_post =
    {
        "amount": "9",
        "currency": "PLN",
        "description": "test payment from link",
        // "control": "202cb9dsf52d23434ed",
        "language": "pl",
        "ignore_last_payment_channel": 1,
        "redirection_type": 0,
        "url": "https://demo.hopeit.pl/",
        "urlc": "https://demo.hopeit.pl/",
        "payer": {
            "first_name": "John",
            "last_name": "Smith",
            "email": "john.smith@example.com",
            "phone": "+48123456789",
            "address": {
                "street": "Wielicka",
                "building_number": "28B",
                "postcode": "30-552",
                "city": "Krakow",
                "region": "Malopolska",
                "country": "POL"
            }
        },
        "seller": {
            "p_info": "My Best Shop"
        }
    }

    let options = {
        url: urlGen,
        method: 'POST',
        body: JSON.stringify(data_to_post),
        auth: {
            'username': 'huzainimhd@gmail.com',
            'password': '@101101996zen'
        },
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const link = await rp(options)
    const { token, payment_url } = JSON.parse(link)
    const chk = sha256(pin + token).toString()

    return `${payment_url}&chk=${chk}`
}

module.exports = { paymentLink }