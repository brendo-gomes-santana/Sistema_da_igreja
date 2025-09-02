"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
//CONTROLLER
const createUserController_1 = __importDefault(require("./controller/User/createUserController"));
const LoginUserController_1 = __importDefault(require("./controller/User/LoginUserController"));
const CreateMusicController_1 = __importDefault(require("./controller/Musics/CreateMusicController"));
const ListMusicController_1 = __importDefault(require("./controller/Musics/ListMusicController"));
const UniqueMusicController_1 = __importDefault(require("./controller/Musics/UniqueMusicController"));
const DeleteMusicController_1 = __importDefault(require("./controller/Musics/DeleteMusicController"));
const CreateLeviteController_1 = __importDefault(require("./controller/Levites/CreateLeviteController"));
const ListLevitesController_1 = __importDefault(require("./controller/Levites/ListLevitesController"));
const ListTypesController_1 = __importDefault(require("./controller/Types/ListTypesController"));
const ListCategoriesController_1 = __importDefault(require("./controller/Category/ListCategoriesController"));
const CreateEventController_1 = __importDefault(require("./controller/Events/CreateEventController"));
const ListEventsController_1 = __importDefault(require("./controller/Events/ListEventsController"));
const UniqueEventController_1 = __importDefault(require("./controller/Events/UniqueEventController"));
const SendWhatsappController_1 = __importDefault(require("./controller/Whatsapp/SendWhatsappController"));
const DeleteLeviteEventController_1 = __importDefault(require("./controller/EventLevite/DeleteLeviteEventController"));
const CreateLeviteEventController_1 = __importDefault(require("./controller/EventLevite/CreateLeviteEventController"));
const CreateLinksController_1 = __importDefault(require("./controller/Links/CreateLinksController"));
const DeleteLinkController_1 = __importDefault(require("./controller/Links/DeleteLinkController"));
const createMusicEventController_1 = __importDefault(require("./controller/EventMusic/createMusicEventController"));
const deleteMusicEventController_1 = __importDefault(require("./controller/EventMusic/deleteMusicEventController"));
//SCHEMAS
const users_1 = require("./schemas/users");
const musics_1 = require("./schemas/musics");
const leivtes_1 = require("./schemas/leivtes");
const Events_1 = require("./schemas/Events");
const whatsapp_1 = require("./schemas/whatsapp");
const EventLevite_1 = require("./schemas/EventLevite");
const links_1 = require("./schemas/links");
const EventMusic_1 = require("./schemas/EventMusic");
async function routes(app) {
    // USERS
    app.post('/login', {
        schema: {
            tags: ['USER'],
            description: 'Login user',
            body: users_1.LoginUserSchema
        }
    }, LoginUserController_1.default);
    app.post('/user', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['USER'],
            description: 'Create a new user',
            security: [{ bearerAuth: [] }],
            body: users_1.CreateUser,
        }
    }, createUserController_1.default); // Required Token
    //MUSICS
    app.post('/music', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSIC'],
            description: 'Create a new Music',
            security: [{ bearerAuth: [] }],
            body: musics_1.CreateMusicSchema
        }
    }, CreateMusicController_1.default); // Required Token
    app.get('/musics', {
        schema: {
            tags: ['MUSIC'],
            description: 'list all musics',
            querystring: musics_1.ListMusicShema
        }
    }, ListMusicController_1.default);
    app.get('/music/:id', {
        schema: {
            tags: ['MUSIC'],
            description: 'Searching a music with uuid',
            params: musics_1.UniqueMusicSchema
        }
    }, UniqueMusicController_1.default);
    app.delete('/music/:id', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSIC'],
            description: 'Delete a music with uuid',
            security: [{ bearerAuth: [] }],
            params: musics_1.UniqueMusicSchema
        }
    }, DeleteMusicController_1.default); // Required Token
    //LEVITES
    app.post('/levite', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LEVITE'],
            description: 'Create a new Levite',
            security: [{ bearerAuth: [] }],
            body: leivtes_1.CreateLeviteSchema
        }
    }, CreateLeviteController_1.default); // Required Token
    app.get('/levites', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LEVITE'],
            security: [{ bearerAuth: [] }],
            description: 'List the all levites',
        }
    }, ListLevitesController_1.default); // Required Token
    //TYPES
    app.get('/types', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['TYPE'],
            security: [{ bearerAuth: [] }],
            description: 'List the all levites',
        }
    }, ListTypesController_1.default); // Required Token
    //CATEGORIES
    app.get('/categories', {
        schema: {
            tags: ['CATEGORIES'],
            description: 'List the all categories',
        }
    }, ListCategoriesController_1.default);
    //EVENTS
    app.post('/event', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['EVENTS'],
            security: [{ bearerAuth: [] }],
            description: 'Create a new event',
            body: Events_1.CreateEventSchema
        }
    }, CreateEventController_1.default); // Required Token
    app.get('/events', {
        schema: {
            tags: ['EVENTS'],
            description: 'List the all Events',
        }
    }, ListEventsController_1.default);
    app.get('/event/:id', {
        schema: {
            tags: ['EVENTS'],
            description: 'search the event detail',
            params: Events_1.UniqueIdEventSchema
        }
    }, UniqueEventController_1.default);
    // SEND WHATSAPP
    app.post('/send-whatsapp/:id_event', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['WHATSAPP'],
            security: [{ bearerAuth: [] }],
            description: 'will send a message to the "on fire" group about event details.',
            params: whatsapp_1.sendWhatsappShema
        }
    }, SendWhatsappController_1.default); // Required Token
    // LINKS
    app.post('/links', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LINKS'],
            security: [{ bearerAuth: [] }],
            description: 'this route are to create new links',
            body: links_1.CreateLinkShema
        }
    }, CreateLinksController_1.default); // Required Token
    app.delete('/link/:id', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LINKS'],
            security: [{ bearerAuth: [] }],
            description: 'this route are to delete link',
            params: links_1.DeleteLinkShema
        }
    }, DeleteLinkController_1.default); // Required Token
    // LEVITES EVENTS
    app.post('/event/levite', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LEVITES OF EVENT'],
            security: [{ bearerAuth: [] }],
            description: 'this route are to create a new levite of event.',
            body: EventLevite_1.CreateleviteEventShema
        }
    }, CreateLeviteEventController_1.default); // Required Token
    app.delete('/event/levite/:id', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['LEVITES OF EVENT'],
            security: [{ bearerAuth: [] }],
            description: 'this route are to delete levite of event.',
            params: EventLevite_1.IdLeviteEventShema
        }
    }, DeleteLeviteEventController_1.default); // Required Token
    //MUSICS OF EVENTS
    app.post('/event/music', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSICS OF EVENT'],
            security: [{ bearerAuth: [] }],
            description: 'this route are to create music of event.',
            body: EventMusic_1.createMusicEventSchema
        }
    }, createMusicEventController_1.default); // Required Token
    app.delete('/event/music/:id', {
        onRequest: [app.authenticate],
        schema: {
            tags: ['MUSICS OF EVENT'],
            security: [{ bearerAuth: [] }],
            description: 'this route are to delete music of event.',
            params: EventMusic_1.DeleteMusicEventShema
        }
    }, deleteMusicEventController_1.default); // Required Token
}
