const list = document.getElementById('list')
const price = document.getElementById('price')
const itemJson = localStorage.getItem('cart')
const itemObject = JSON.parse(itemJson)

function render(items) {
    const result = items.map((item) => {
        let res = ''
        res += `
        <div class="card">
        <img src="${item.image}">   
        <div>${item.name}</div>
        <div>${item.price}₽</div>
        <button onclick="removeItem(${item.id})"> X </button>
        </div>
        `
        return res
    })
    list.innerHTML = result.join('')

}
render(itemObject)
 
function removeItem(id){
    let remove = itemObject.filter(item => item.id !== id)
    localStorage.setItem('cart' , JSON.stringify(remove))
    render(remove)
    window.location.reload()
    // localStorage.clear()
}

function priceSum (arr){
    let sum = 0
    let result = arr.map(item => {
       sum += item.price
       return sum
    })
    price.innerHTML = `<div class="prise">Total amount: ${result[result.length-1]}₽</div>`
}

priceSum(itemObject)

