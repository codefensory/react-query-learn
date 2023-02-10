const express = require("express")
const path = require("path")

const app = express()

const PORT = process.env.PORT ?? 8080

app.use(express.static(path.join(__dirname, "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"))
})

app.listen(PORT, "127.0.0.1", (error) => {
   if (error) {
      throw error
   }

   console.log("Server running in 127.0.0.1:" + PORT)
})

module.exports = app