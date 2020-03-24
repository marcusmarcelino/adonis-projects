'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/users', 'AuthController.index');
Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.get('/app', 'AppController.index').middleware(['auth']);

Route.group(() => {
  Route.resource('tweets', 'TweetController')
  .apiOnly()
  .except('update');
}).middleware('auth');
