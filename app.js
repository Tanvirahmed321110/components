
function bazarCalculation(fishQty, aluQty, onionQty) {
    const fish = 20
    const alu = 20
    const onion = 20

    const totalFish = fish * fishQty
    const totalAlu = alu * aluQty
    const totalOnion = onion * onionQty


    const totlaBazar = totalFish + totalAlu + totalOnion;
    let newTotal = totlaBazar

    if (totlaBazar > 100) {
        const discount = totlaBazar * 5 / 100;
        newTotal = totlaBazar - discount

    }
    else if (totlaBazar > 500) {
        const discount = totlaBazar * 10 / 100
        newTotal = totlaBazar - discount
    }
    else {
        totlaBazar
    }


    return { newTotal, totlaBazar };
}

const result = bazarCalculation(30, 1, 1)


const phones = [
    {
        id: 1,
        brand: "Apple",
        model: "iPhone 15 Pro",
        color: "Natural Titanium",
        storage: "256GB",
        price: 999,
        inStock: true
    },
    {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S24 Ultra",
        color: "Titanium Gray",
        storage: "512GB",
        price: 1299,
        inStock: true
    },
    {
        id: 3,
        brand: "Google",
        model: "Pixel 8 Pro",
        color: "Porcelain",
        storage: "128GB",
        price: 999,
        inStock: false
    },
    {
        id: 4,
        brand: "OnePlus",
        model: "12",
        color: "Flowy Emerald",
        storage: "256GB",
        price: 799,
        inStock: true
    },
    {
        id: 5,
        brand: "Xiaomi",
        model: "14 Pro",
        color: "Black",
        storage: "512GB",
        price: 1099,
        inStock: true
    }
];


function lowestPhone(arr) {
    let low = arr[0]

    for (const phone of arr) {
        const price = phone.price

        if (phone < low.price) {
            low = price
        }
    }

    return low
}

const ch = lowestPhone(phones)


function discountCal(qty) {
    let total = 0;
    if (qty <= 10) {
        total = qty * 100
        return total
    }
    else if (qty <= 20) {
        total = qty * 9
        return total
    }
    else if (qty <= 30) {
        total = qty * 8
        return total
    }

}


function getDiscount(qty) {
    const basePrice = 100
    let discountRate = 0;

    if (qty <= 5) {
        discountRate = 0.02
    }
    else if (qty <= 10) {
        discountRate = 0.5
    }

    const subTotal = qty * basePrice;
    const discountPrice = subTotal * discountRate
    const totla = subTotal - discountPrice

    return {
        subTotal, discountPrice, totla
    }
}

console.log(getDiscount(5))
