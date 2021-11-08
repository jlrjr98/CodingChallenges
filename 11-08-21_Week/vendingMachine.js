function vendingMachine(productNumber, money) {

    returnProduct = {
        product: '',
        change: []
    }

    switch (productNumber) {
        case(1): {
            if (money < 120) return "Not enough money for this product";

            returnProduct = calculateChange(money - 120, returnProduct);
           
            returnProduct.product = "Chips";
            break;
        }
        case(2): {
            if (money < 200) return "Not enough money for this product";

            returnProduct = calculateChange(money - 200, returnProduct);
           
            returnProduct.product = "Cookies";
            break;
        }
        case(3): {
            if (money < 150) return "Not enough money for this product";

            returnProduct = calculateChange(money - 150, returnProduct);
           
            returnProduct.product = "Gummy Candy";
            break;
        }
        case(4): {
            if (money < 300) return "Not enough money for this product";

            returnProduct = calculateChange(money - 300, returnProduct);
           
            returnProduct.product = "Donut";
            break;
        }
        case(5): {
            if (money < 350) return "Not enough money for this product";

            returnProduct = calculateChange(money - 350, returnProduct);
           
            returnProduct.product = "Cake";
            break;
        }
        case(6):  {
            if (money < 200) return "Not enough money for this product";

            returnProduct = calculateChange(money - 200, returnProduct);
           
            returnProduct.product = "Chocolate";
            break;
        }
        case(7): {
            if (money < 120) return "Not enough money for this product";

            returnProduct = calculateChange(money - 120, returnProduct);
           
            returnProduct.product = "Crackers";
            break;
        }
        default: {
            return "Enter a valid product numnber";
        }
    }

    return returnProduct;
}

function calculateChange(owed, returnProduct) {

    while (owed >= 500) {
        returnProduct.change.push(500);
        owed = owed - 500;
    }

    while (owed >= 200) {
        returnProduct.change.push(200);
        owed = owed - 200;
    }

    while (owed >= 100) {
        returnProduct.change.push(100);
        owed = owed - 100;
    }

    while (owed >= 50) {
        returnProduct.change.push(50);
        owed = owed - 50;
    }
    while (owed >= 20) {
        returnProduct.change.push(20);
        owed = owed - 20;
    }
    while (owed >= 10) {
        returnProduct.change.push(10);
        owed = owed - 10;
    }

    return returnProduct;
}