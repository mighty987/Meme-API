let img =document.getElementById('img');

const xhr = new XMLHttpRequest();
xhr.open('GET','https://meme-api.herokuapp.com/gimme',true);
xhr.onload = function(){
    if(this.status==200){
        let json =JSON.parse(this.responseText);
      
    
        let html="";
        
            html+=`<div class="card mb-3">
            <img src="${json["url"]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${json["title"]}</h5>
            </div>
          </div>`;
    
         img.innerHTML=html;

    }
    else{
        console.log("ERROR");
    }
}
xhr.send();