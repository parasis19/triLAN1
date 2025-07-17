// server.js
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// POST route to handle form submission
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." })
  }

  // For now, just log the form data
  console.log("Contact form submission received:")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Subject:", subject)
  console.log("Message:", message)

  // Send back a success response
  res.status(200).json({ message: "Form submitted successfully!" })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${5173}`)
})
