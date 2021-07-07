import CONFIG from './config';
import { handleScroll } from './controller/Menu.controller';
import { Menu } from './models/menu/Menu';

window.onload = () => {
    new Menu(CONFIG.menuItems)
}

$(handleScroll)