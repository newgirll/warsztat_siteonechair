document.addEventListener("DOMContentLoaded", function(){

    var linkMenu = document.querySelector(".main-nav ul").children[0];

    var subMenu = linkMenu.children[0].nextElementSibling;

    var picture = document.querySelectorAll(".picture-img");




// pojawiające się submenu
       linkMenu.addEventListener("mouseover", function(){

           if(this.children !== undefined){
               subMenu.style.visibility = "visible";
           }
       })

       linkMenu.addEventListener("mouseout", function(){
        
            if(this.children !== undefined){
                subMenu.style.visibility = "hidden";
            }
        })
 
        
// znikające paski  ze zdjęcia
        for(var i = 0; i < picture.length; i++){
            
            
            picture[i].addEventListener("mouseover", function(){
                if(this.children[1] !== undefined){
                    this.children[1].style.visibility = "hidden";
                }
               
            })

            picture[i].addEventListener("mouseout", function(){
                if(this.children[1] !== undefined){
                    this.children[1].style.visibility = "visible";
                }
               
            })
        }
    

// slider

    var boxSlider = document.querySelector(".slider-box").children;
    var btnNext = document.querySelector(".slider-next i");
    var btnPrev = document.querySelector(".slider-prev i");

    var array = [];
    for(var i = 0; i < boxSlider.length; i++){
        array.push(boxSlider[i]);
    }

    var index = 0;
     array[index].classList.add("visible");

    btnNext.addEventListener("click", function(){

        array[index].classList.remove("visible");
            index++;    
        if(index >= array.length){
            index = 0;
        }
        array[index].classList.add("visible");

    })

    btnPrev.addEventListener("click", function(){
        
        array[index].classList.remove("visible");
            index--;    
        if(index < 0){
            index = array.length-1;
        }
        array[index].classList.add("visible");
        
    })


//lista drop-down - kalkulator

    var arrow = document.querySelectorAll(".list_arrow");
    var panelLeft = document.querySelector(".panel_left");
    var panelRight = document.querySelector(".panel_right");
    var transport = document.querySelector("#transport");
    var resultSum = document.querySelector(".sum strong");




    for(var i = 0; i < arrow.length ; i++){

        arrow[i].addEventListener("click", function(){
            
            var ul = this.nextElementSibling;
            var list = ul.children;

            ul.classList.toggle("visible");

        
            
            for(var j = 0; j < list.length; j++){
            
                
                list[j].addEventListener("click", function(){

                    var parent = this.parentElement;

                    var productSpec = {
                        price : parseInt(this.getAttribute("data-price")),
                        text : this.innerText
                    }
                
                
                    if(parent === arrow[0].nextElementSibling){
                        resultSum.innerText = 0;
                        panelLeft.children[0].innerText = productSpec.text;
                        panelRight.children[0].innerText = productSpec.price;
                        resultSum.innerText = parseInt(resultSum.innerText) + productSpec.price;
                        
                    }
                    
                    
                    if(parent === arrow[1].nextElementSibling ){

                    
                        panelLeft.children[1].innerText = productSpec.text;
                        panelRight.children[1].innerText = productSpec.price;
                        resultSum.innerText = parseInt(resultSum.innerText) + productSpec.price;
                    
                    }
                

                    if(parent === arrow[2].nextElementSibling ){

            
                        panelLeft.children[2].innerText = productSpec.text;
                        panelRight.children[2].innerText = productSpec.price;
                        resultSum.innerText = parseInt(resultSum.innerText) + productSpec.price;
                    
                    }   
           
                })

            }

        })

    }

    transport.addEventListener("click", function(){
        var priceTran = {
            transport : transport.getAttribute("data-transport-price")
        }

        if(transport.checked){
            panelRight.children[3].innerText = priceTran.transport;
            resultSum.innerText = parseInt(resultSum.innerText) + parseInt(priceTran.transport);
        } else {
            resultSum.innerText = parseInt(resultSum.innerText) - parseInt(priceTran.transport);
        }
        

    })



})

    
    

        

           
    







