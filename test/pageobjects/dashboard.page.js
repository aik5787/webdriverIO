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
        return $('.MuiToolbar-root [data-testid="PersonIcon"]');
    }
    get userFullName () {
        return $('h6');
    }
}

export default new DashboardPage();
