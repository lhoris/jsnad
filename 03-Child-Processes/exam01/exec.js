'use strict';
const { exec } = require('node:child_process');
exec('cat *.js missing_file | wc -l', {encoding: 'UTF-8'}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});