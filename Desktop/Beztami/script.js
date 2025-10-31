
// localStorage.setItem("net-balance", "1200")


var load = 0;
const openFormbtn = document.getElementById("openForm");
const closeFormbtn = document.getElementById("closeForm");
const Open = document.getElementById('hide');
console.log(openFormbtn, closeFormbtn, Open)
const totalincome=document.getElementById('income_p')
const totaldepens=document.getElementById('expenses_p')
const totalbalnce=document.getElementById('balance_p')
const history= document.getElementById("historique")
let income =0;
let net_balnce;
let depnse=0;

// localStorage.clear();
openFormbtn.addEventListener('click', () => {
    Open.classList.remove('hidden');

});
closeFormbtn.addEventListener('click', () => {
    Open.classList.add('hidden');

});

const Form = document.getElementById("form");
const Amont = document.getElementById("Amont");
const date = document.getElementById("date");
const type = document.getElementById("type");
const desc = document.getElementById("desc");
const Add = document.getElementById("submit");
//  preventDefault: remove default event

Add.addEventListener('click', (event) => {
    event.preventDefault();

    addTransaction();
    form.reset();
})






let nbr_tr = localStorage.length;




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
    
    let savedData = localStorage.setItem('transaction '+ nbr_tr, JSON.stringify(
           data
    ));
    nbr_tr++;
    // console.log('storge', savedData);

    
}
 let seeData = () =>{


    for(let i = 0 ;i<nbr_tr; i++){
        let Affichage = JSON.parse(localStorage.getItem('transaction ' + i));
        // load+= Number(Affichage.Amont);
        let element = document.createElement('div')
        element.innerHTML='<div class="px-5 py-10 border border-gray-200 rounded-lg"><div class="flex justify-between w-full"><p class="text-gray-100 font-bold">'
        + Affichage.amont
        + '</p><p class="text-gray-100 font-bold">'
        + Affichage.date
        +'</p></div><p class="text-gray-100 font-bold">'
        +Affichage.descr
        +'</p></div>'
        if(Affichage.type == 'DE'){
            element.classList.add('bg-red', 'col-span-1')
        }

        document.getElementById("historique").appendChild(element);
        // console.log(element);
 }  
 }
  openHistory.addEventListener('click', () => {
        history.classList.toggle('hidden');
  });
   
  











// let p = document.createElement("p")
// p.textContent = localStorage.getItem("net-balance") + "dh"
// p.classList.add("text-gray-100", "font-bold")
// document.getElementById("net-balance").appendChild(p)

