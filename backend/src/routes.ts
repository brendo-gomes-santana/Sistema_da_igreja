import { fastify } from 'fastify';
import { FastifyTypedInstance } from './types'

//CONTROLLER
import CreateUserController from "./controller/User/createUserController";
import LoginUserController from './controller/User/LoginUserController';
import CreateMusicController from './controller/Musics/CreateMusicController';

//SCHEMAS
import { CreateUser, LoginUserSchema } from "./schemas/users";
import { CreateMusicSchema } from './schemas/musics';

export async function routes(app: FastifyTypedInstance) {
    
    // USERS
    app.post('/login', {
        schema: {
            tags: ['USER'],
            description: 'Login user',
            body: LoginUserSchema
        }
    }, LoginUserController)
    app.post('/user', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['USER'],
            description: 'Create a new user',
            security: [{ bearerAuth: [] }],
            body: CreateUser,
        }
    }, CreateUserController)

    //Musics
    app.post('/music',{
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSIC'],
            description: 'Create a new Music',
            security: [{ bearerAuth: [] }],
            body: CreateMusicSchema
        }
    }, CreateMusicController)


}