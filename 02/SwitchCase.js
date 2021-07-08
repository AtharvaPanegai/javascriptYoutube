/** @format */

// 1.Buyer => products
// 2.Seller => Inventory
// 3. Admin=>  All things

var userType = "Admin";

switch (userType) {
  case "Admin":
    console.log("Display All things");
    break;

  case "Seller":
    console.log("Display Inventory");
    break;
  case "Buyer":
    console.log("Display Only products");

  default:
    break;
}
