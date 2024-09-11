
function handleContact() {

    const name1 = document.getElementById("Name"),
        phone = document.getElementById("Phone"),
        message = document.getElementById("Message"),
        email = document.getElementById("Email"),
        btn = document.getElementById("btn");

    btn.onclick = () => {
        if (name1.value !== "" && phone.value !== "" && email.value !== "" && message.value !== "") {
            let values = {
                name: name1.value,
                phone: phone.value,
                email: email.value,
                message: message.value
            }
            fetch("https://doshabcatering.glitch.me/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(r => {
                    if (r.ok) {
                        alert('mesajınız uğurla göndərildi tezliklə sizinlə əlaqə saxlanlnacaq')
                    }
                })
        }
        else {
            alert("zəhmət olmasa xanaları doldurun")
        }

        name1.value = "",
            phone.value = "",
            message.value = "",
            email.value = ""
    }

}

handleContact();



const up = document.getElementById("up"),
    text = document.getElementById("text"),
    down = document.getElementById("down");


down.onclick = () => {
    text.style.display = "block";
    down.style.display = "none";
    up.style.display = "block"
}

up.onclick = () => {
    text.style.display = "none";
    down.style.display = "block";
    up.style.display = "none"
}