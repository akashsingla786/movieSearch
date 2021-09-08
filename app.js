const form=document.querySelector('form');
const movies=document.getElementById('movies')

function getShows(text){

    movies.innerHTML="";
    const url=` https://api.tvmaze.com/search/shows?q=${text}`
    fetch(url).then((res)=>{
        return res.json();
    })
    .then((data)=>{

        for(let item of data){
           if(item.show.image && item.show.officialSite){
            // const img=document.createElement('img');
            // img.src=item.show.image.medium;
            // img.style.margin="10px";


            const card = document.createElement('div');
  card.classList = 'card-body';
 
           const card1=`<div class="card" >
           <img src="${item.show.image.medium}" class="card-img-top" >
           <div class="card-body">
             <h3 class="card-title" style="color:white">${item.show.name}</h3>
             <h4 style="color:white">Language: ${item.show.language}</h4>
             <h5 style="color:white">Genres : ${item.show.genres}</h5>
           
             <p class="card-text" style="color:white">Status : ${item.show.status}</p>


             <p class="card-text" style="color:white">Rating : ${item.show.rating.average}</p>
             <a href="${item.show.officialSite}" class="button">Watch Now</a>

            
           </div>
         </div>`
       
         movies.innerHTML +=card1;
        
           }
        }

         console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=form.elements[0].value;
    getShows(text);
    form.elements[0].value="";
    console.log(text);
})