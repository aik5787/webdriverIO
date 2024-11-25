class RegistrationPage {
  get firstNmInp() {return $('input[name="firstName"].MuiInputBase-input')}
    get lastNmInp() { return $('[name="lastName"]'); }
    get emailInp() { return $('[name="email"]'); }
    get passwordInp() { return $('[name="password"]'); }
    get submitBtn() { return $('[type="submit"]'); }
    get alertMssg() { return $('form .MuiAlert-message'); }
    get firstNmReqAl() { return $('#\\:r1\\:-helper-text'); }
    get lastNmReqAl() { return $('[id=":r6:-helper-text"]'); }
    get emailReqAl() { return $('[id=":r7:-helper-text"]'); }
    get passwordReqAl() { return $('[id=":r8:-helper-text"]'); }
  
    async registration(firstName, lastName, email, password) {
      await this.firstNmInp.setValue(firstName);
      await this.lastNmInp.setValue(lastName);
      await this.emailInp.setValue(email);
      await this.passwordInp.setValue(password);
      await this.submitBtn.click();
    }
  }
  
  export default new RegistrationPage();
  