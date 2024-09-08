// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';




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

let images = document.getElementById('images')

function adDatas(par) {

    for (let i = 0; i < par.length; ++i) {
        images.innerHTML += `  <div class="blog_img_box">
                    <img src=${par[i].url} alt="#" />
                </div>`
    }

}
