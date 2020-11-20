var productName = [];
var quantityOfGoods = [];
var priceProduct = [];


function addProduct() {
    var productHtml = document.getElementById("name").value;
    var quantitytHtml = document.getElementById("quantity").value;
    var priceHtml = document.getElementById("price").value;
    let fiscal = document.getElementById("fiscalReceipt");
    let sumClean = document.getElementById("sumHtml"); 
    let maxPrice = document.getElementById("maxHtml"); 
    let averagePrice = document.getElementById("averagHtml"); 

    if (productHtml != "" && quantitytHtml != "" && priceHtml != "") {
        if (quantitytHtml > 0) {
          if(priceHtml > 0) {
            productName.push([productHtml]);
            quantityOfGoods.push([quantitytHtml]);
            priceProduct.push([priceHtml]);
            cleanHtml();
            var sum = 0;
            var j =0;
            var maxmax = 0;
            var average = 0;
            var allQuantity = 0;
            var allPrice = 0;
 
            
            for (let i = 0; i < productName.length; i++) {
                fiscal.insertAdjacentHTML('beforeend', `<p><b>Товар</b>: ${productName[i]} <b>Количество</b>: ${quantityOfGoods[i]} <b>Цена</b>: ${priceProduct[i]}</p>`);
                sum = sum + quantityOfGoods[i] * priceProduct[i];
                allQuantity = Number(allQuantity) + Number(quantityOfGoods[i]);
                allPrice = Number(allPrice) + Number(priceProduct[i]);
                if (maxmax < quantityOfGoods[i] * priceProduct[i]) {
                    maxmax = quantityOfGoods[i] * priceProduct[i];
                    j = i;
                }
            }
            cleanSum()
            sumClean.insertAdjacentHTML('beforeend', `${sum}`);
            cleanMax()
            maxPrice.insertAdjacentHTML('beforeend', `${productName[j]} : ${maxmax}`);
            cleanAverage() 
            average = allPrice / allQuantity;
            averagePrice.insertAdjacentHTML('beforeend', `${average.toFixed(2)}`);

               } else {
                cleanHtml();
                fiscal.insertAdjacentHTML('beforeend', `<p>смотри на него, беспратно захотел ага</p>`);
            }
        } 
        else {
            cleanHtml();
        fiscal.insertAdjacentHTML('beforeend', `<p>Товара маловато, возьми больше)</p>`);
    }
    } else {
        cleanHtml();
        fiscal.insertAdjacentHTML('beforeend', `<p>Что то забыл ввести</p>`);
    }
}

function cleanHtml() {
    var element = document.getElementById("fiscalReceipt");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
function cleanSum() {
    var sumClean = document.getElementById("sumHtml");
    while (sumClean.firstChild) {
        sumClean.removeChild(sumClean.firstChild);
    }
}
function cleanMax() {
    var maxClean = document.getElementById("maxHtml");
    while (maxClean.firstChild) {
        maxClean.removeChild(maxClean.firstChild);
    }
}
function cleanAverage() {
    var averagClean = document.getElementById("averagHtml");
    while (averagClean.firstChild) {
        averagClean.removeChild(averagClean.firstChild);
    }
}