#!/usr/bin/env node

const fs = require("fs")
const inquirer = require("inquirer")
const convertDate = require('./utils/date.js')

const filePath = "/run/media/sushant/Sushant/Obsidian Vault/To dos"
const timeStamp = Date.now()
const date = new Date(timeStamp)
const { month, day } = convertDate(date)

if (process.argv.includes('list')) {
  readFileContent()
}
else if (process.argv.includes('note')) {
  addTodo()
}
else {
  console.log("To add note: notely note <thing to be added>")
  console.log("To list notes: notely list")
}

function addTodo() {
  const note = process.argv.slice(3).join(" ") || "Empty Note"
  const content = `- [ ] ${note}\n`
  fs.appendFile(`${filePath}/${month}- ${String(day).length === 1 ? "0" + day : day}.md`, content, {}, (err) => {
    if (err) {
      console.error(err.message)
    }
    else {
      console.log("Note Added")
    }
  })
}

function readFileContent() {
  fs.readFile(`${filePath}/${month}- ${String(day).length === 1 ? "0" + day : day}.md`, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    console.log("Your Notes for", month, day)
    console.log(" ")
    console.log(data)
  })
}

function prompter() {
  const prompt = inquirer.createPromptModule()
  prompt([{
    type: "input",
    name: "filePath",
    message: "Enter a your file path"
  },
  ]).then((answers) => {
    const filePath = answers.filePath
    addTodo()
  })
}
