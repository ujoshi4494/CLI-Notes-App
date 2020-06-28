const chalk = require('chalk');
const yargs = require('yargs');
const handlers = require('./handlers')



yargs.command({
    command: 'add',
    describe: "add note",
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        },
        body: {
            type: 'string',
            demandOption: true,
        }
    },
    handler: function (argv) {
        handlers.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: "Remove note",
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        }
    },
    handler: function (argv) {
        handlers.removeNote(argv.title)
    }
})

yargs.parse()

