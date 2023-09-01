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


function convertSecToHrAndMin(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
   
    return { hours, minutes };
}

const buttonClick = async (btnId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${btnId}`);
    const data = await response.json();
    const cardDiv = document.getElementById('card-container');
    cardDiv.innerHTML = '';
 
    if(data.data[3] === undefined){
        
        const cardDivs = document.getElementById('data-not-found');
        const div = document.createElement('div');
        div.innerHTML = ` <div class="grid items-center w-full justify-center mx-auto "> <div class="grid mx-auto  justify-center   items-center">
        <img class="w-[90px] mx-auto" src="Icon.png " alt="">
        <p>Oops!! Sorry, There is no content here</p>
      </div></div>`
       cardDiv.appendChild(div)
       cardDivs.innerHTML=''
       }
     
    data.data.forEach((news) => {
       
        const div = document.createElement('div');
        const postedDateSeconds = news?.others?.posted_date;
        const postedDate = convertSecToHrAndMin(postedDateSeconds);

        let formattedPostedDate = '';

        if (postedDate.hours > 0 || postedDate.minutes > 0) {
            formattedPostedDate = `${postedDate.hours} hours ${postedDate.minutes} minutes`;
        }
       
       
       
        div.innerHTML = `<div class="card bg-base-100 shadow-xl ">
        <figure class="px-3 pt-2">
            <img class="h-[200px]" src="${news?.thumbnail}" />
            ${formattedPostedDate ? `<p class="ml-[-150px] bg-black text-white mt-[130px] p-1">${formattedPostedDate}</p>` : ''}
        </figure>
   
        <div class="flex flex-row gap-3 card-body  ">
            <div>
                <img class="w-[40px]  h-[40px] rounded-full" src="${news?.authors[0]?.profile_picture}" alt="">
            </div>
            <div>
                <h2 class="card-title">${news?.title}</h2>
                <div class="flex gap-5" >
                    <p>${news?.authors[0]?.profile_name}</p> 
                    <p>${news?.authors[0]?.verified===true}</p>
                </div>
                <p>${news?.others?.views}</p>
            </div>
        </div>
    </div>`;
        cardDiv.appendChild(div);
    });
}




buttonClick('1000');
allBtn()

const openNewPageButton = document.getElementById("openNewPageButton").addEventListener("click", function() {
    window.location.href ='blog.html'
});





// function convertSecToHrAndMin(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
   
//     return { hours, minutes };
// }

// const buttonClick = async (btnId) => {
//     const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${btnId}`);
//     const data = await response.json();
//     const cardDiv = document.getElementById('card-container');
//     cardDiv.innerHTML = '';

//     data.data.forEach((news) => {
//         const div = document.createElement('div');
//         const postedDateSeconds = news?.others?.posted_date;
//         const postedDate = convertSecToHrAndMin(postedDateSeconds);

//         let formattedPostedDate = '';

//         if (postedDate.hours > 0 || postedDate.minutes > 0) {
//             formattedPostedDate = `${postedDate.hours} hours ${postedDate.minutes} minutes`;
//         }
       
//         div.innerHTML = `<div class="card bg-base-100 shadow-xl ">
//             <figure class="px-3 pt-2">
//                 <img class="h-[200px]" src="${news?.thumbnail}" />
//                 ${formattedPostedDate ? `<p class="ml-[-150px] bg-black text-white mt-[130px] p-1">${formattedPostedDate}</p>` : ''}
//             </figure>
       
//             <div class="flex flex-row gap-3 card-body  ">
//                 <div>
//                     <img class="w-[40px]  h-[40px] rounded-full" src="${news?.authors[0]?.profile_picture}" alt="">
//                 </div>
//                 <div>
//                     <h2 class="card-title">${news?.title}</h2>
//                     <div class="flex gap-5" >
//                         <p>${news?.authors[0]?.profile_name}</p> 
//                         <p>${news?.authors[0]?.verified}</p>
//                     </div>
//                     <p>${news?.others?.views}</p>
//                 </div>
//             </div>
//         </div>`;

//         cardDiv.appendChild(div);
       
//     });
    
// }
