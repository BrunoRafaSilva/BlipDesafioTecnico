import express from 'express';
import repositoriesRouter from './repositories.js';
import helloWorldRouter from './hello.js';
import assetsRouter from './assets.js';
import middlewareErros from '../middleware/errorController.js';

export default (app) => {
    app.use(express.json(), repositoriesRouter, helloWorldRouter, assetsRouter, middlewareErros);
};
