
  async function load_data(){
    let requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
    let result = await fetch(requestURL);
    if (result.ok){
      let json = await result.json();
      const prophets = json["prophets"];
      prophets.forEach(add_node);
      return json
    }
  }

  function add_node(list_item){
    let card = document.createElement('section');
    let h2_node = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let image = document.createElement('img');

    h2_node.textContent = `${list_item.name} ${list_item.lastname}`;
    dob.textContent = `${list_item.birthdate}`;
    pob.textContent = `${list_item.birthplace}`;
    image.src = list_item.imageurl
    image.alt = `Picture of ${list_item.name} ${list_item.lastname}, prophet #${list_item.order}`

    card.appendChild(h2_node);
    card.appendChild(dob)
    card.appendChild(pob)
    card.appendChild(image)
    const cardsList = document.querySelector(".cards");
    cardsList.appendChild(card);
  }

 load_data()

 function add_node_table(list_item){
  let list_row = document.createElement('tr')
  let td_name = document.createElement('td')
  td_name.textContent = `${list_item.name} ${list_item.lastname}`

  let td_brithdate = document.createElement('td')
  td_brithdate.textContent = list_item.birthdate

  const table = document.querySelector('table')
  list_row.appendChild(td_name)
  list_row.appendChild(td_brithdate)
  table.appendChild(list_row)
 }