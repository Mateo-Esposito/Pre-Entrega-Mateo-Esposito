const products = [

    {
        id: '1',
        name: 'MacBook pro 16" ',  
        price: '2599',
        category: 'Apple',
        img:  'https://www.macstation.com.ar/img/productos/2616-1.jpg',
        stock: 12,
        description:
         `
        12-Core CPU /
        19-Core GPU /
        16GB Unified Memory /
        512GB SSD
        `
    },

    {
        id: '2',
        name: 'HP Envy 14" ',  
        price: ' 999',
        category: 'HP',
        img:  'https://cdn1.smartprix.com/rx-iTnnUJusc-w1200-h1200/TnnUJusc.jpg',
        stock: 20,
        description: `
        Intel Core i5-1135G78/
        NVIDIA GeForce GTX 1650 Ti Max-Q/
        16 GP DDR4 3200/
        256 GB SSD NVMe M.2
        `
    },

    {
        id: '3',
        name: 'Dell XPS 13" ',  
        price: '2699',
        category: 'Dell',
        img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRht9FG-A9Zkp79DifRO67roRffQpoWx_9pf6oNQRN5HE0oAFtEn67X8YoBuItej4Rugno&usqp=CAU',
        stock: 8,
        description: `
        13th Generation Intel® Core™ i7-1360P/
        Intel® Iris® Xe Graphics/
        16GB, LPDDR5, 6000 MHz/
        512G M.2 PCIe NVMe SSD`
    }
]

export const getProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products)
        }, 500)
    }) 
}



export const getProductById = (productId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.find (prod => prod.id === productId))
        }, 500)
    }) 
}

export const getProductByCategory = (productCategory) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter (prod => prod.category === productCategory))
        }, 500)
    }) 
}