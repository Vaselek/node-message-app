const fs = require('fs');
const messagePath = './messages'


const getTitles = () => fs.readdirSync(messagePath, (err, files) => {
    const titles = [];
    files.forEach(file => {
        titles.push(file);
    });
    return titles
});

const getFiveTitles = (titles) => {
    if (titles.length > 5) return titles.reverse().slice(0, 5);
    return titles;
}

module.exports = {
    getItems() {
        const titles = getTitles();
        const lastFiveTitles = getFiveTitles(titles);
        return lastFiveTitles.map(title => {
            const fileContent = fs.readFileSync(messagePath + '/' + title);
            const fileObject = JSON.parse(fileContent);
            fileObject['dateTime'] = title.replace('.txt','');
            return fileObject;
        })
    },
    saveItem(data) {
        const currentDate = new Date();
        const fileName = currentDate.toISOString() + '.txt';
        const path = './messages/' + fileName;
        fs.writeFileSync(path, JSON.stringify(data));
        return currentDate.toISOString();
    }
};
