const express = require("express")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/phones", require("/route/phoneRouter.js"))

app.use(9000, () => {
    console.log("successfully running on port 9000")
})