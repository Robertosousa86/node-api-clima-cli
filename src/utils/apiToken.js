const fs = require('fs');
const { join, resolve } = require('path');

const tokenFilePath = join(__dirname, 'token');

function saveApiToken (apiToken) {

    return new Promise((resolve, reject) => {
        try {
            fs.writeFile(tokenFilePath, apiToken, (error) => {

                if (error){
                    resolve(error);
                }
                resolve(error);
            })
        } catch (error) {
            reject(error);
        }
    });
}

    function getApiToken() {

        return new Promise ((resolve, reject) => {
            try {
                fs.readFile(tokenFilePath, 'utf8', (error, token) => {
                    if (error || token === '') {
                        reject('OPS! Você precisa fornecer um token. Gere token aqui: https://advisor.climatempo.com.br');
                    }

                    resolve(token);
                })
            } catch (error) {
                reject(error);
            }
        });
    }

    export {
        saveApiToken,
        getApiToken
    };