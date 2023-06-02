const express = require("express");
const qr = require('qr-image');
const app = express();
app.use(express.json())
require("dotenv").config()
//this app is created by prem chandr adas
// https://qrcodeps.onrender.com/qrcode?text=<your text or url>
const PORT=process.env.PORT || 3000
app.post("/qrcode", (req, res) => {
    const text = req.query.text || 'Hello, World!';

    try {
        const qrCodeUrl = `data:image/png;base64,${qr.imageSync(text, { type: 'png' }).toString('base64')}`;
        res.status(200).send({ "url": qrCodeUrl })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

app.listen(PORT, () => {
    try {
        console.log(`server is running on PORT ${PORT}`)
    } catch (error) {
     console.log(error.message)
    }
})