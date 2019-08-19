const
    fs = require('fs'),
    LOG_PATH = './errors.log'

module.exports = class AppError {
    constructor(error, number) {
        this.error = error
        this.number = number
        this.saveError()
    }
    static clearLog() {
        if(fs.existsSync(LOG_PATH))
            fs.unlinkSync(LOG_PATH)
    }
    getErrorMessage() {
        return `${this.number})\tTime: ${(new Date()).toUTCString()}\n${this.error.stack}\n`

    }
    saveError () {
        this.createFile()

        let logFile = fs.readFileSync(LOG_PATH, 'utf-8')
        logFile += this.getErrorMessage()
        fs.writeFileSync(LOG_PATH, logFile, 'utf-8')
    }
    createFile() {
        if(!fs.existsSync(LOG_PATH))
            fs.writeFileSync(LOG_PATH, '', 'utf-8')
    }
};
