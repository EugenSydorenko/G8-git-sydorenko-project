const fs = require('fs');
const path = require('../fixtures/loginData.json');

function writeLoginDataToFile(data, filename = 'loginData.json') {
    const filePath = path.join(__dirname, '..', '..', filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { writeLoginDataToFile };