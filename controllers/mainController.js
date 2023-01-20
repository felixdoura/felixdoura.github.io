const fs = require('fs');
const path = require('path');

const controller = {

    index: (req, res) => {
        res.render('index', {style: "/css/styleIndex.css", title: "Felix Doura"})
    },

}

module.exports = controller;