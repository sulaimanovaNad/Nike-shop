const products = [
    {
        id: 0,
        image: './image/1.webp',
        name: 'Nike Winflo 8',
        price: 9199,
        number: 0
    },
    {
        id: 1,
        image: './image/2.webp',
        name: 'Nike Air Max Dawn',
        price: 10999,
        number: 0
    },
    {
        id: 2,
        image: './image/3.webp',
        name: 'Nike Air Zoom SuperRep 3',
        price: 11799,
        number: 0
    },
    {
        id: 3,
        image: './image/4.webp',
        name: 'Nike Air Zoom Infinity Tour',
        price: 16999,
        number: 0
    },
    {
        id: 4,
        image: './image/5.webp',
        name: 'Jordan MA2',
        price: 11799,
        number: 0
    },
    {
        id: 5,
        image: './image/6.webp',
        name: 'Air Jordan XXXVI SE Kia',
        price: 17499,
        number: 0
    },
    {
        id: 6,
        image: './image/7.webp',
        name: 'Jordan Delta 2 SE',
        price: 9380,
        number: 0
    },
    {
        id: 7,
        image: './image/8.webp',
        name: 'Nike Zoom Fly 4',
        price: 15499,
        number: 0
    },
    {
        id: 8,
        image: './image/9.webp',
        name: 'Nike ZoomX Dragonfly',
        price: 14299,
        number: 0
    },
    {
        id: 9,
        image: './image/10.webp',
        name: 'Nike ZoomX Vaporfly ',
        price: 20999,
        number: 0
    },
    {
        id: 10,
        image: './image/11.webp',
        name: 'Nike Air Zoom Pegasus 39',
        price: 10999,
        number: 0
    },
    {
        id: 11,
        image: './image/12.webp',
        name: 'Nike Free Metcon 4',
        price: 10999,
        number: 0
    }
];

// const row = document.getElementById('row');
let state = []


function render() {
    const final = products.map((item) => {
        let res = ''
        res += `
        <div class="card">
        <img src="${item.image}">
        <div>${item.name}</div>
        <div>${item.price}₽</div>
        <button onclick="addToCart(${item.id})">ADD TO CART</button>
        </div>
        `
        return res
    })
    row.innerHTML = final.join('')
}

function addToCart(id) {
    let isInCart = state.some((item) => item.id === id)

    if(isInCart){
        alert('Already in cart')
    }else{
        products[id].number++
        state.push(products[id])
        let stateJson = JSON.stringify(state)
        localStorage.setItem('cart', stateJson)
    }
}


render()

