import { handleFormSubmit } from './controller/Form.controller';
import Home from './controller/Home.controller';
import Menu from './controller/Menu.controller';
import About from './controller/About.controller';
import Contact from './controller/Contact.controller';
import Footer from './controller/Footer.controller'

window.onload = () => {
    
}

let menu = Menu();

$(menu.renderMenu);
$(menu.handleScroll);
$(menu.handleMenuItemClick);
$(handleFormSubmit);

let home = Home();

$(home.renderHome);

let about = About();

$(about.renderAbout);

let contact = Contact();

$(contact.renderContact);

let footer = Footer();

$(footer.renderFooter);