const getContent = async () => {
  for (let index = 1; index <= 826; index++) {
    try {
      let reponse = await fetch(`https://rickandmortyapi.com/api/character/${index}`)
      let characters = await reponse.json()
      showContent(characters)
    } catch (error) {
      console.log(error)
    }
  }
}

const showContent = characters => {  
  const main = document.querySelector('[data-js="rickandmorty"]')

  return main.innerHTML += `
  <div class="card">
    <img class="card-image" alt="${characters.name}" src="https://rickandmortyapi.com/api/character/avatar/${characters.id}.jpeg">
    <h3 class="card-title">${characters.id}. ${characters.name}</h3>
    <p class="card-title">${characters.status} | ${characters.species}</p>
  </div>
  `
}

function search(){
  let filter = document.getElementById('find').value.toUpperCase();

  let item = document.querySelectorAll('.card');

  let l = document.getElementsByTagName('h3');

  for(var i=0; i<=l.length;i++){
    let a=item[i].getElementsByTagName('h3')[0];

    let value=a.innerHTML || a.innerText || a.textContent;

    if(value.toUpperCase().indexOf(filter)>-1) {
      item[i].style.display="";
    }
    else{
      item[i].style.display="none";
    }
  }
}

getContent()
