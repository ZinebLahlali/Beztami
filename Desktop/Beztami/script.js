var load = 0;
const openFormbtn = document.getElementById("openForm");
const closeFormbtn = document.getElementById("closeForm");
const Open = document.getElementById('hide');
console.log(openFormbtn, closeFormbtn, Open)
const totalincome = document.getElementById('income_p')
const totaldepens = document.getElementById('expenses_p')
const totalbalnce = document.getElementById('balance_p')
const history = document.getElementById("historique")
const Close = document.getElementById("close")
const openHistory = document.getElementById("openHistoryButton");
const Form = document.getElementById("form");
const Amont = document.getElementById("Amont");
const date = document.getElementById("date");
const type = document.getElementById("type");
const desc = document.getElementById("desc");
const Add = document.getElementById("submit");
let income =0;
let net_balnce;
let depnse=0;

Close.addEventListener('click', () =>{history.classList.add('hidden');})

// localStorage.clear();
openFormbtn.addEventListener('click', () => {Open.classList.remove('hidden');});
closeFormbtn.addEventListener('click', () => {Open.classList.add('hidden');});
openHistory.addEventListener('click', () => {history.classList.toggle('hidden');});
   


//  preventDefault: remove default event

Add.addEventListener('click', (event) => {
    event.preventDefault();

    addTransaction();
    Form.reset();
});

let nbr_tr = Object.keys(localStorage).filter(k => k.startsWith("transaction ")).length;

const addTransaction = () => {
    if(type.value == 'DE'){
        depnse +=Number(Amont.value); 
        totaldepens.textContent=`$${depnse}`;
    } else if(type.value == 'IN'){
        income += Number(Amont.value);
        totalincome.textContent=`$${income}`;
    }
      totalbalnce.textContent=`$${income - depnse}`;
  
    
    
    let data = {
         amont: Amont.value,
        date: date.value,
        type: type.value,
        descr: desc.value

    }
    
    localStorage.setItem('transaction '+ nbr_tr, JSON.stringify(data
    ));
    nbr_tr++; 
    seeData();
}
 let seeData = () =>{
    history.innerHTML = "";

   for (let i = 0; i < nbr_tr; i++) {
        let item = localStorage.getItem('transaction ' + i);
        if (!item) continue; 

        let Affichage = JSON.parse(item);

       
        let am = Number(Affichage.amont);
        if (Affichage.type === 'DE') depnse += am;
        else income += am;

        // créer div
        let element = document.createElement('div');
        element.classList.add('px-5', 'py-3', 'rounded', 'm-2', 'text-white');
        element.classList.add(Affichage.type === 'DE' ? 'bg-red-500' : 'bg-green-500');

        element.innerHTML = `
            <div class="flex justify-between w-60">
                <p>${Affichage.amont} €</p>
                <p>${Affichage.date}</p>
            </div>
            <p>${Affichage.descr}</p>
        `;

        history.appendChild(element);
    }

    // mettre à jour les totaux
    totalincome.textContent = `$${income}`;
    totaldepens.textContent = `$${depnse}`;
    totalbalnce.textContent = `$${income - depnse}`;
};

//Afficher les données au chargement de la page
window.addEventListener("DOMContentLoaded", seeData);


