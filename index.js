const fs = require('fs');
const fileSize = require('filesize');

const employers = [];

employers.push({
  name: 'Husein',
  salary: 1000,
  id: 1001
});

const ahmed = {
  name: 'Ahmed',
  salary: 9000,
  id: 1002
};

employers.push(ahmed);

employers.push({
  name: 'Nick',
  salary: 5000,
  id: 1003
});

fs.writeFileSync('jsondata.json', JSON.stringify(employers));
console.log(JSON.stringify(employers));

console.log(fileSize(265318, JSON.stringify(employers)));
