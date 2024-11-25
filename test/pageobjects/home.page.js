import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  get loginBtn() {
    return $("#auth-login");
  }

  get registrationBtn() {
    return $("#auth-register");
  }

  get searchInp() {
    return $('input[class*="MuiInputBase-input"]');
  }

  get toggle() {
    return $('input[type="checkbox"]');
  }

  get bedrmsDrpdwnSelect() {
    return $('[data-value="2"]');
  }
}

export default new HomePage();
