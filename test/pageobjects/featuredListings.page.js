class FeaturedListingPage {
    get toggle() {
      return $('input[type="checkbox"]');
    }
  
    get searchInp() {
      return $('#:r1:'); // Replace with the correct selector if needed
    }
  
    get bedrmsDrpdwnSelect() {
      return $('[data-value="2"]');
    }
  
    get bedroomIcn() {
      return $('[viewBox="0 0 2048 1280"]');
    }
  
    get priceBox() {
      return $('[class*="MuiPaper-rounded"]');
    }
  }
  
  export default new FeaturedListingPage();