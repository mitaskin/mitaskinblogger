import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express(); //Express Server Oluşturduk.
dotenv.config();

//.json tarzında gelen verileri kabul et
//gelen veriye bir limit veriyoruz. img dosyaları büyük olduğu için hata veriyor bunun için 30mb sınırı var
//extended true ---> uyarıları bize göstermeyecek konsodla
app.use(bodyParser.json({ limit: "30mb", extended: true }))

//?
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

//uzaktaki bir sunucuya göndereceğimiz http  paketlerinde sorun yaşanmaması amaçı ile yapıldı
app.use(cors());

app.get("/", (req, res) => {
    
    res.json({
        author: "codding with mitaskin :)",
        message: "Mutlu Yıllar!",
    });

});

app.use("/posts", postRoutes);

//Backendimizi çalıştıracağımız bir port oluşturyoruz.
const PORT = process.env.PORT || 5000;

//MongoDB bağlantısı yapılıyor.

//const CONNETION_URL = "mongodb+srv://mitaskinuser:mitaskin@blogcluster.pgtj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(process.env.CONNETION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server çalışıyor PORT: http://localhost:${PORT}`);
        });

    })
    .catch(error => {
        console.error(error.message);
    });