// const managers = [
//   {
//     full_name: "Стефанюк Ореста Федорівна",
//     phone_number: "+380503385240",
//     county: "Округ №7 (Бельведер)",
//     number_street: 29,
//   },

//   {
//     full_name: "Стефанюк Ореста Федорівна",
//     phone_number: "+380503385240",
//     county: "Округ №7 (Бельведер)",
//     number_street: 29,
//   },

//   {
//     full_name: "Баворовська Мирослава Володимирівна",
//     phone_number: "+380503728654",
//     county: "Округ №2 (Княгинин)",
//     street: "Північний",
//     number_street: 1,
//   }
// ]


const search = document.getElementById('search');
const matchList = document.getElementById('match-list');



const searchStates = async searchText => {
  const res = await fetch('./manager.json');
  const states = await res.json();

  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.street.match(regex);
  });
  if (searchText.length === 0) {
    matches = [];
  }

  outputHtml(matches);
}

const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <div class = "card card-body mb-1">
        <h4>${match.street}
          <span class = "text-prim ary"> ${match.name} ${match.phone_number}</span>          
        </h4>
        <small>${match.county}</small>
      </div>
    `).join('');

    matchList.innerHTML = html;
  }
}



search.addEventListener('input', () => searchStates(search.value))








