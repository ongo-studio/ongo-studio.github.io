import { handleFormSubmit } from './controller/Form.controller';
import Home from './controller/Home.controller';
import Menu from './controller/Menu.controller';
import Services from './controller/Services.controller';
import Contact from './controller/Contact.controller';
import CONFIG from './config';
import About from './controller/About.controller';
import Translation from './controller/Translation.controller';

let menu = Menu(CONFIG.menuItems);
let about = About(CONFIG.aboutContent)
let home = Home(CONFIG.homeContent);
let services = Services(CONFIG.servicesContent);
let contact = Contact(CONFIG.contactContent);


$(menu.renderMenu);
$(about.renderAbout);
$(menu.handleMenuItemClick);
$(menu.handleScroll);

$(home.renderHome);
$(services.renderServices);
$(contact.renderContact);

$(handleFormSubmit);