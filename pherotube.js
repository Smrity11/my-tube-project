const allBtn =async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data =await response.json()

    const btnDiv =document.getElementById('btn-collection')
    data.data.forEach((btnCtagory) => {
        const div =document.createElement('div')
        div.innerHTML=` <button onclick="buttonClick('${btnCtagory.category_id}')" class= "tab bg-slate-300 text-base text-black px-5 py-1 rounded">${btnCtagory.category}</button>`
        btnDiv.appendChild(div)
    });
   
}

 const buttonClick =async (btnId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${btnId}`)
    console.log(btnId);
    const data =await response.json()
    const cardDiv =document.getElementById('card-container')
    cardDiv.innerHTML=""
    data.data.forEach((news) => {
        const div =document.createElement('div')
        div.innerHTML=` <div class="card bg-base-100 shadow-xl ">
        <figure class="px-3 pt-2">
          <img class="h-[200px]" src="${news?.thumbnail}" />
          <p id="time-convert">${news?.others?.posted_date}</p>
          
        </figure>
        <div class="flex flex-row gap-3 card-body  ">
            <div>
                <img class="w-[40px] h-[40px] rounded-full" src="${news?.authors[0]?.profile_picture}" alt="">
            </div>
            <div>
                <h2 class="card-title">${news?.title}</h2>
                <div class="flex gap-5" >
                <p>${news?.authors[0]?.profile_name}</p> 
                <p>${news?.authors[0]?.verified}</p></div>
                <p>${news?.others?.views}</p>
            </div>
        </div>
      </div>`
        cardDiv.appendChild(div)
    })
 }

 

buttonClick('1000')
allBtn()
