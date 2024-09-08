// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';
const swiper = document.getElementById("swiper"),
    left = document.getElementById('left'),
    right = document.getElementById('right');



const app = initializeApp(await fetch('../connfig.json').then(r => r.json()));
const db = getFirestore(app);

const fetchFirestoreData = async () => {
    try {
        let objs = []
        // Collection funksiyasını istifadə edin
        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => {
            objs.push(doc.data().products)

        });

        adDatas(objs[0])

    } catch (error) {
        console.error("Məlumatları çəkərkən xəta baş verdi: ", error);
    }
};

fetchFirestoreData();



function adDatas(par) {


    for (let i = 0; i < par.length; ++i) {

        swiper.innerHTML += ` <div class="item">
                                <div class="product_blog_img">
                                    <img style="width: 236px; height: 210px;object-fit:cover;" src=${par[i].url} alt="#" />
                                </div>
                                <div class="product_blog_cont">
                                    <h3>${par[i].title}</h3>
                                    <h4 style="color:red;"><span class="theme_color">${par[i].prince}</span>  AZN</h4>
                                </div>
                            </div>
`
    }
    localStorage.setItem('length', par.length)


}



let length = localStorage.getItem('length');
let counter = 0;

right.onclick = () => {
    if (counter < length - 4)
        counter++;
    swiper.style.transform = `translateX(${-counter * 305}px)`;
}


left.onclick = () => {


    if (counter > 0) {
        counter--;
        swiper.style.transform = `translateX(${-counter * 305}px)`
    }

}
