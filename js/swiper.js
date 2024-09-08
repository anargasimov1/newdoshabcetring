

const name1 = document.getElementById("Name"),
    phone = document.getElementById("Phone"),
    message = document.getElementById("Message"),
    email = document.getElementById("Email"),
    btn = document.getElementById("btn");

btn.onclick = () => {
    let values = {
        name: name1.value,
        phone: phone.value,
        email: email.value,
        message: message.value
    }


    name1.value = "",
        phone.value = "",
        message.value = "",
        email.value = ""
}



