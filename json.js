let invoice = {
    name: "gusta", 
    age: 18,
    products: {
        0: 
            ["Mouse Redragon ", 129.90],
        1: 
            ["Teclado Redragon ", 179],
        2:
            ["Monitor Target", 879]

    }
    }



generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`) 
    console.log(`a idade é ${invoice.age}` )
    for(const index in invoice.products){
        let [productName, productprice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productprice}`)
    }
    
}
