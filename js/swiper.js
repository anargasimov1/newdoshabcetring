// const swiper = document.getElementById("swiper")

// console.log(swiper)



// for (let i = 0; i <= 10; ++i) {
//     swiper.innerHTML += `   <div class="item">
//                                         <div class="product_blog_img">
//                                             <img src="images/rs1.png" alt="#" />
//                                         </div>
//                                         <div class="product_blog_cont">
//                                             <h3>Homemade</h3>
//                                             <h4><span class="theme_color">10</span> AZN</h4>
//                                         </div>
//                                     </div>`
// }

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

    console.log(values)
    name1.value = "",
        phone.value = "",
        message.value = "",
        email.value = ""
}