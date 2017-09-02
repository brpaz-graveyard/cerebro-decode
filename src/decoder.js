'use strict';

const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');

/**
 * Decodes the user inputed string into multiple formats
 * @param string input
 * @return object
 */
const decode = (text) => {

    let base64decoded = new Buffer(text, 'base64').toString('ascii');
    let urlDecoded = querystring.unescape(text);
    let htmlDecoded = Entities.decode(text);
    
    return [
        {
            title: `BASE64: ${base64decoded}`,
            value: base64decoded
        },
        {
            title: `URL: ${urlDecoded}`,
            value: urlDecoded
        },
        {
            title: `HTML: ${htmlDecoded}`,
            value: htmlDecoded
        }
    ]
};

module.exports = {
    decode
};