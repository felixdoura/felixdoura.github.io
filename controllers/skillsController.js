const fs = require('fs');
const path = require('path');

const skillsFilePath = path.join(__dirname, '../dataBase/skills.json');
const skills = JSON.parse(fs.readFileSync(skillsFilePath, 'utf-8'));

const controller = {
	// Listado de Skills
	index: (req, res) => {
	 	res.render('skills/skills', {skills});
	},
}

module.exports = controller;