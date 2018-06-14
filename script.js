function Phone(brand, price, color, height, width, weight) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.height = height;
  this.width = width;
  this.weight = weight;
}
Phone.prototype.printInfo = function() {
    console.log(
    "The phone brand is " + this.brand + 
    ", color is " + this.color + 
    ", price is " + this.price + 
    ", height is " + this.height + 
    ", width is " + this.width + 
    " and the weight is " + this.weight + 
    "."
    );
}

var iPhone6S = new Phone("Apple", 2250, "silver", "110 mm ", "50 mm", "100 g");

var SamsungGalaxyS6 = new Phone("Samsung", 2000, "rose gold", "105 mm ", "45 mm", "105 g");

var OnePlusOne = new Phone("OnePlus", 1750, "black", "100 mm ", "55 mm", "110 g");

iPhone6S.printInfo();

SamsungGalaxyS6.printInfo();

OnePlusOne.printInfo();
