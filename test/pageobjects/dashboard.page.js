import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get nameLbl() { return $('h6'); } 
    
    get roleLbl() { return $('a p'); }
    
    get userIcon () {
        return $$('[class*="MuiAvatar-root"]')[0];
    }
    get userFullName () {
        return $('h6');
    }
    get logoutLink() {
        return $$('[class*="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters"]')[3];
      }

      open () {
        return super.open('dashboard/user/profile');
    }
}

export default new DashboardPage();
