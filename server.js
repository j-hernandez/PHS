var vorpal = require('vorpal')()
    fs = require('fs');

vorpal
    .command('create', 'Create')
    .action(function (args, callback) {
        this.log('Creating');
        callback();
    });

vorpal
    .delimiter('ph$')
    .show();
