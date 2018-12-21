'use strict'

// Pull in our modules
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single'
}

// Text + chalk definitions
const data = {
  name: chalk.white.bold('Julián Duque /'),
  bio: chalk.white.bold('Developer and Educator'),
  handle: chalk.magenta('@julian_duque'),
  work: chalk.white('Solutions Architect at NodeSource'),
  twitter: chalk.magenta('https://twitter.com/julian_duque'),
  github: chalk.magenta('https://github.com/julianduque'),
  twitch: chalk.magenta('https://twitch.tv/julianduque'),
  linkedin: chalk.magenta('https://linkedin.com/in/juliandavidduque'),
  web: chalk.magenta('https://julianduque.co'),
  npx: chalk.white('npx julianduque'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelTwitch: chalk.white.bold('    Twitch:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const bio = `${data.bio}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const twitching = `${data.labelTwitch}  ${data.twitch}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + bio + newline.repeat(2) + working + newline + twittering + newline + githubing + newline + twitching + newline + linkedining + newline + webing + newline + newline + carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
