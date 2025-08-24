import { fastify } from 'fastify';
import { FastifyTypedInstance } from './types'

//CONTROLLER
import CreateUserController from "./controller/User/createUserController";
import LoginUserController from './controller/User/LoginUserController';
import CreateMusicController from './controller/Musics/CreateMusicController';
import ListMusicController from './controller/Musics/ListMusicController';
import UniqueMusicController from './controller/Musics/UniqueMusicController';
import DeleteMusicController from './controller/Musics/DeleteMusicController';

//SCHEMAS
import { CreateUser, LoginUserSchema } from "./schemas/users";
import { CreateMusicSchema, ListMusicShema, UniqueMusicSchema } from './schemas/musics';

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
    }, CreateUserController) // Required Token

    //Musics
    app.post('/music', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSIC'],
            description: 'Create a new Music',
            security: [{ bearerAuth: [] }],
            body: CreateMusicSchema
        }
    }, CreateMusicController) // Required Token
    app.get('/music', {
        schema: {
            tags: ['MUSIC'],
            description: 'list all musics',
            querystring: ListMusicShema
        }
    }, ListMusicController)
    app.get('/music/:id', {
        schema: {
            tags: ['MUSIC'],
            description: 'Searching a music with uuid',
            params: UniqueMusicSchema
        }
    }, UniqueMusicController)
    app.delete('/music/:id', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSIC'],
            description: 'Delete a music with uuid',
            security: [{ bearerAuth: [] }],
            params: UniqueMusicSchema
        }
    }, DeleteMusicController) // Required Token
}