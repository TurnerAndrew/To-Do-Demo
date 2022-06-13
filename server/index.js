const express = require('express')
const cors = require('cors')
const PORT = 4000
const sequelize = require('./sequelize')
const app = express()

app.use(express.json())
app.use(cors())

// endpoints
app.get('/api/getAllTasks', async (req, res) => {
  let allTasks = await sequelize.query(`
    SELECT * FROM tasks t
    JOIN categories c
    ON t.category = c.category_id
  `)
  res.status(200).send(allTasks[0])
})

app.get('/api/getCategories', async (req, res) => {
  let allCategories = await sequelize.query(`
    SELECT * FROM categories
  `)
  res.status(200).send(allCategories[0])
})

app.post('/api/addTask', async (req, res) => {
  let {name, description, category} = req.body
  await sequelize.query(`
    INSERT INTO tasks(task_name, task_description, category)
    VALUES(
      '${name}',
      '${description}',
      ${category}
    )
  `)
  res.status(200).send("Successfully Added Task!")
})

app.delete('/api/deleteTask/:id', async (req, res) => {
  const {id} = req.params
  await sequelize.query(`
    DELETE FROM tasks
    WHERE task_id = ${id}
  `)
  res.status(200).send("Deleted Task")
})

app.listen(PORT, () => console.log(`server is up on port ${PORT}`))