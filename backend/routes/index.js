// import { protectLogin } from '../middleware/auth.js';

//import the controller model or something
const hartPrefix = "/hartBE/v1";
export default app => {
    console.log('we made it to here');
    //GET request
    app.route(`${hartPrefix}/home`).get(homeController.getHome);
    app.route(`${hartPrefix}/notes`).get(notebook.getAllNotes).post(notebook.createNote);

    //this one right here, kirk (go to the stylistController for the logic if
    //you want to see)

    app.use(errorHandler);
};

// module.export
