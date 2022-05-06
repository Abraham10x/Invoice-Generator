const washCar = document.getElementById('wash-car')
const mowLawn = document.getElementById('mow-lawn')
const pullWeed = document.getElementById('pull-weed')
const total = document.getElementById('total-cost')
const btnEl = document.getElementById('send-invoice')
const itemContainer = document.getElementById('items')
const emailContainer = document.getElementById('email-invoice')
const emailEl = document.getElementById('email')
const submitBtn = document.getElementById('submit')

let totalCost = 0

washCar.addEventListener('click', function(){
    itemContainer.innerHTML += `
        <div class="item" id='wash-car'>
        <p class="item-title">Wash Car</p>
        <p id="remove" class='remove'>Remove</p>
        <p class="item-price">$10</p>
        </div>
    `
    totalCost += 10
    total.textContent = `$${totalCost}`
    Remove()
})

mowLawn.addEventListener('click', function(){
    itemContainer.innerHTML += `
        <div class="item" id='mow-lawn'>
        <p class="item-title">Mow Lawn</p>
        <p id="remove" class='remove'>Remove</p>
        <p class="item-price">$20</p>
        </div>
    `
    totalCost += 20
    total.textContent = `$${totalCost}`
    Remove()
})

pullWeed.addEventListener('click', function(){
    itemContainer.innerHTML += `
        <div class="item" id='pull-weed'>
        <p class="item-title">Pull Weed</p>
        <p id="remove" class='remove'>Remove</p>
        <p class="item-price">$30</p>
        </div>
    `
    totalCost += 30
    total.textContent = `$${totalCost}`
    Remove()
})

btnEl.addEventListener('click', emailInvoice)

function emailInvoice(){
    emailContainer.classList.toggle('show')
}

submitBtn.addEventListener('click', function(){
    const error = document.getElementById('error')
    const emailError = document.getElementById('error-email')
    error.classList.add('error-display')
    emailError.classList.add('email-display')
    const email = emailEl.value
    if(itemContainer.children.length > 0) {
        if(email.length > 0) {    
            window.open(`mailto:${email}?subject=subject&body= Cost Items ${itemContainer.innerText} Total Cost ${total.textContent}`);
        } else{
            emailError.classList.remove('email-display')
        }
    } else {
        error.classList.remove('error-display')
    }
})

function Remove(){
    const removeEl = document.getElementsByClassName('remove')
    for (let i = 0; i < removeEl.length; i++) {
        const r = removeEl[i]
        r.addEventListener('click', function(event){
            itemContainer.removeChild(r.parentElement)
            if(r.parentElement.id === 'wash-car') {
                totalCost -= 10
            }
            if(r.parentElement.id === 'mow-lawn') {
                totalCost -= 20
            }
            if(r.parentElement.id === 'pull-weed') {
                totalCost -= 30
            }
            total.textContent = `$${totalCost}`
        })
    }
}