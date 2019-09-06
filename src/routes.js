import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Success!!!' });
});

routes.post('/sessions', SessionController.store);
routes.post('/user', UserController.store);

export default routes;
