import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get userIcon () {
        return $$('[class*="MuiButtonBase-root MuiIconButton-root"]')[0];
    }
    get userFullName () {
        return $('h6');
    }
}

export default new DashboardPage();
