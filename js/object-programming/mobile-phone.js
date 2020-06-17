class Phone {
    brand = "Samsung"
    color = 'black'
    price = 123.21
    usbC = false
    sendSms = function(text) {
        this.sms = this.user +" wysłał sms: "+ text
    }
    user = "Marcin"
}
let phone = new Phone()
phone.sendSms("treść smsa")
console.log(phone.sms)


const choice = prompt(`Co sądzisz o nauce programowania?`)
const message = `Nauka programowania jest ${choice}`
console.log(message)




// console.log("phone brand is "+phone.brand+" and price was "+phone.price)
