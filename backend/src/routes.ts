
import { FastifyTypedInstance } from './types'

//CONTROLLER
import CreateUserController from "./controller/User/createUserController";
import LoginUserController from './controller/User/LoginUserController';
import CreateMusicController from './controller/Musics/CreateMusicController';
import ListMusicController from './controller/Musics/ListMusicController';
import UniqueMusicController from './controller/Musics/UniqueMusicController';
import DeleteMusicController from './controller/Musics/DeleteMusicController';
import CreateLeviteController from './controller/Levites/CreateLeviteController';
import ListLevitesController from './controller/Levites/ListLevitesController';
import ListTypesController from './controller/Types/ListTypesController';
import ListCategoriesController from './controller/Category/ListCategoriesController';
import CreateEventController from './controller/Events/CreateEventController';
import ListEventsController from './controller/Events/ListEventsController';
import UniqueEventController from './controller/Events/UniqueEventController';
import SendWhatsappController from './controller/Whatsapp/SendWhatsappController';

//SCHEMAS
import { CreateUser, LoginUserSchema } from "./schemas/users";
import { CreateMusicSchema, ListMusicShema, UniqueMusicSchema } from './schemas/musics';
import { CreateLeviteSchema } from './schemas/leivtes';
import { CreateEventSchema, UniqueIdEventSchema } from './schemas/Events';
import { sendWhatsappShema } from './schemas/whatsapp';

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

    //MUSICS
    app.post('/music', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSIC'],
            description: 'Create a new Music',
            security: [{ bearerAuth: [] }],
            body: CreateMusicSchema
        }
    }, CreateMusicController) // Required Token
    app.get('/musics', {
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

    //LEVITES
    app.post('/levite', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LEVITE'],
            description: 'Create a new Levite',
            security: [{ bearerAuth: [] }],
            body: CreateLeviteSchema
        }
    }, CreateLeviteController) // Required Token
    app.get('/levites', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LEVITE'],
            security: [{ bearerAuth: [] }],
            description: 'List the all levites',
        }
    }, ListLevitesController) // Required Token

    //TYPES
    app.get('/types', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['TYPE'],
            security: [{ bearerAuth: [] }],
            description: 'List the all levites',
        }
    }, ListTypesController) // Required Token

    //CATEGORIES
    app.get('/categories', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['CATEGORIES'],
            security: [{ bearerAuth: [] }],
            description: 'List the all categories',
        }
    }, ListCategoriesController) // Required Token

    //EVENTS
    app.post('/event', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['EVENTS'],
            security: [{ bearerAuth: [] }],
            description: 'Create a new event',
            body: CreateEventSchema
        }
    }, CreateEventController) // Required Token
    app.get('/events', {
        schema: {
            tags: ['EVENTS'],
            description: 'List the all Events',
        }
    }, ListEventsController)
    app.get('/event/:id', {
        schema: {
            tags: ['EVENTS'],
            description: 'search the event detail',
            params: UniqueIdEventSchema
        }
    }, UniqueEventController)

    // SEND WHATSAPP
    app.post('/send-whatsapp/:id_event', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['WHATSAPP'],
            security: [{ bearerAuth: [] }],
            description: 'will send a message to the "on fire" group about event details.',
            params: sendWhatsappShema
        }
    }, SendWhatsappController) // Required Token
}