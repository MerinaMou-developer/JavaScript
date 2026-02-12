console.log("external file loaded successfully");
// option 2: for click event handler
 function  makeyellow(){
            document.body.style.backgroundColor="yellow";

        }
function makeRed(){
            document.body.style.backgroundColor="red"
        }


// option 3: get element by Id and then select onclick

const btnMakeBlue=document.getElementById("btn-make-blue")
        btnMakeBlue.onclick=function makeBlue(){
            document.body.style.backgroundColor="blue"
        }


    // option 4: get element bu id and then set onclick

const btnMakePurple=document.getElementById("btn-make-purple");

btnMakePurple.onclick=makePurple


        function makePurple(){
            document.body.style.backgroundColor="purple"
        }


        // option 5: add event listener

document.getElementById("btn-make-green").addEventListener('click',function makeGreen(){
        document.body.style.backgroundColor="green"
                })

document.getElementById('btn-make-gold')
        .addEventListener('click',function(){
            document.body.style.backgroundColor="gold"
        })