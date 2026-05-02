const menu = {
  _menu: '',
  _price: 0,
  set meal(mealToCheck) {
    if (mealToCheck === '')
      mealToCheck = this._menu;
  },
   set price(priceToCheck) {
    if (priceToCheck === 0)
      priceToCheck = this._price;
  },
get todaysSpecial() {
  if (this._menu && this._price) {
    return `Today's Special is ${this._menu} for $${this._price}!`;
    } else {
    return 'Meal or price was not set correctly!';  
   }
}
}
menu.meal = 'Strong';
menu.price = 0;
console.log(menu); 

console.log(menu.todaysSpecial);