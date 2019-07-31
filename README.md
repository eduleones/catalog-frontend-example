# Example Catalog Frontend with React

We use "shoes" listing as an example.

## Installation

For installation will be used as reference Ubuntu 18.04 64bits

**Ubuntu requirements:**
```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```
**Fork the repository on GitHub:**
```
git clone git@github.com:eduleones/catalog-frontend-example.git
cd catalog-frontend-example/
```
**React dependency:**
```
npm install --save
sudo apt remove cmdtest
sudo apt remove yarn
sudo npm install -g yarn
```
**API Token :**
Added API Token in App.js file, example:
```
const  BACKEND_TOKEN  =  '30d79434595e8de46e7815f0dc31339ed44e6179'
```
**Start Project :**
```
yarn start
```