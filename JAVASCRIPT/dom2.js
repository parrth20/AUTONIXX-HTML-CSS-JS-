// function event() {
//     console.log("i clicked on the event !!!!!");
// }

// let content = document.querySelector('h1');
// content.addEventListener('click', event);


// THE EVENT OBJRCT 
// const content1 = document.querySelector('#wrapper');
// content1.addEventListener('click' ,function(parth) {
//     console.log(parth)
// });



// default action
// let links =  document.querySelector('a');
// links.addEventListener('click' , function(events){
//     events.preventDefault();
//     console.log("maza AYA");
// });


// let mydiv = document.createElement('div');

// for(let i=1 ; i<100 ;i++){
//     let newelement = document.createElement('p');
//     newelement.textContent = "this is my new para " + i ;

//     newelement.addEventListener('click', function(event){
//         console.log("i have created a new para ")
//     });
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);



// we can more optimise this code  : - 


// let mydiv = document.createElement('div');


// function newpara(event){
//     console.log("i have created a new para ")
// };

// for(let i=1 ; i<100 ;i++){
//     let newelement = document.createElement('p');
//     newelement.textContent = "this is my new para " + i ;

//     newelement.addEventListener('click', newpara);
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);

// we have optimised this code by createing saperate new function  


let mydiv = document.createElement('div');


function newpara(event){
    console.log(" para " + event.target.textContent)
};

for(let i=1 ; i<100 ;i++){
    let newelement = document.createElement('p');
    newelement.textContent = "this is my new para " + i ;

    newelement.addEventListener('click', newpara);
    mydiv.appendChild(newelement);
}
document.body.appendChild(mydiv);