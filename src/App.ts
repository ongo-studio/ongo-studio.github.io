import { handleFormSubmit } from './controller/Form.controller';
import Home from './controller/Home.controller';
import Menu from './controller/Menu.controller';
import Services from './controller/Services.controller';
import Contact from './controller/Contact.controller';
import Footer from './controller/Footer.controller'

let menu = Menu();

$(menu.renderMenu);
$(menu.handleScroll);
$(menu.handleMenuItemClick);
$(handleFormSubmit);

let home = Home();

// $(home.renderHome);

let services = Services();

$(services.renderServices);

let contact = Contact();

$(contact.renderContact);

let footer = Footer();

$(footer.renderFooter);