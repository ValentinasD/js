function generateInvoice(customerName, cuustomerAddress, invoiceDate, items){
        const invoice = {
            custumer:{
                name:customerName,
                address:cuustomerAddress
            },
            date: invoiceDate,
            items: items
        }
        return invoice;

}


const customerName = 'Vardas Pavarde'
const cuustomerAddress = 'Vilnius, Trinapolio 2'
const invoiceDate = '2023-12-14'
const items = [
    {name: 'Product A', price: 20, quantity: 2},
    {name:"Product B", price: 10, quantity: 10}

]


const invoice = generateInvoice(customerName, cuustomerAddress, invoiceDate, items)
console.log(invoice)