let arr = [
    {
        id: 1,
        name: 'AZIZs_KABLUK',
        budget: 500000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'KAMERON_CINEMA',
        budget: 600000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ISKANDARs_ZOO',
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'AMINs_SOOOO',
        budget: 800000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 1500000000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
]

let uspeshnaya = []
let neuspeshnaya = []
let taxes = 0
let taxMax = {}
let taxMin = {}
let avengares = 0

for (let item of arr) {
    item.expensesPerMonth = 0

    for (let child of item.expensesPerYear) {
        item.expensesPerMonth += child.total / 12
    }

    item.expensesPerMonth = Math.round(item.expensesPerMonth)

    let budgetMonth = item.budget / 12

    let remainder = budgetMonth - (item.expensesPerMonth + (budgetMonth / 100 * item.tax))

    remainder > 0 ? uspeshnaya.push(item.name) : neuspeshnaya.push(item.name)
    taxes += budgetMonth / 100 * item.tax
    item.tax = budgetMonth / 100 * item.tax
    avengares += (item.expensesPerMonth + (budgetMonth / 100 * item.tax)) / arr.length
}


taxMax = arr.reduce((a, b) => {
    if (a.tax > b.tax) {
        return a
    } else {
        return b
    }
})

taxMin = arr.reduce((a, b) => {
    if (a.tax < b.tax) {
        return a
    } else {
        return b
    }
})

console.log(arr);