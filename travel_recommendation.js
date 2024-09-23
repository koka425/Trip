

    let resetBtn = document.getElementById("reset");

    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('resert here')
        if(document.getElementById('name2').value === ''){
            return;
        }
        document.getElementById('name2').value = '';
        document.getElementById("lol").remove();
    });

    let loginForm = document.getElementById("loginForm2");
    let result1 = null;
    let result2 = null;
    let result3 = null;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.getElementById('name2').value === ''){
            return;
        }
        fetch('./travel_recommendation_api.json')
        // Exito
        .then(response => response.json())  // convertir a json
        .then(json => {
            console.log(json)
            let searchValue = document.getElementById('name2').value.toLowerCase();
            let arr = ['country', 'countries', 'beach', 'beaches', 'temple', 'temples'];
            let result = arr.includes(searchValue);
            console.log(result)
            if(!result){

                if(!document.getElementById('lol')){
                    let ss = document.createElement("div")
                    ss.id = 'lol'
                    let lele = document.getElementById('lele')
                    lele.appendChild(ss);
                }

                let lol = document.getElementById("lol");
                lol.classList.add("lol");

                let cont = document.createElement("div");
                cont.className = 'cont'
                console.log(cont)
                let para = document.createElement("p");
                para.classList.add("para");
                para.innerHTML = 'NOT FOUND';


                lol.appendChild(cont);
                cont.appendChild(para);
                cont.appendChild(para2);
            } else {

                if(searchValue === 'country'){
                    searchValue = 'countries';
                }
                if(searchValue === 'beach'){
                    searchValue = 'beaches';
                }
                if(searchValue === 'temple'){
                    searchValue = 'temples';
                }
            }

            result1 = json[`${searchValue}`];
            console.log('RESULT: ', result1)


            if(!document.getElementById('lol')){
                let ss = document.createElement("div")
                ss.id = 'lol'
                let lele = document.getElementById('lele')
                lele.appendChild(ss);
            }
            
            
            
            let lol = document.getElementById("lol");
            lol.classList.add("lol");
            

            
            result1.forEach((element) => {
                console.log(element)
                if(searchValue === 'countries' || searchValue === 'country'){
                    element.cities.forEach((element) => {
                        console.log(element)
                        console.log(element.name)
                        let cont = document.createElement("div");
                        cont.className = 'cont'
                        console.log(cont)
                        let para = document.createElement("p");
                        para.classList.add("para");
                        para.innerHTML = element.name;
                        let para2 = document.createElement("p");
                        para2.classList.add("para2");
                        para2.innerHTML = element.description;
                        let para3 = document.createElement("img");
                        para3.src = element.imageUrl;
                        para3.classList.add("para3");
                        
    
                        lol.appendChild(cont);
                        cont.appendChild(para3);
                        cont.appendChild(para);
                        cont.appendChild(para2);
                        
                    })
                } else if(searchValue === 'temples' || searchValue === 'temple'){
                    console.log(element)
                    console.log(element.name)
                    let cont = document.createElement("div");
                    cont.className = 'cont'
                    console.log(cont)
                    let para = document.createElement("p");
                    para.classList.add("para");
                    para.innerHTML = element.name;
                    let para2 = document.createElement("p");
                    para2.classList.add("para2");
                    para2.innerHTML = element.description;
                    let para3 = document.createElement("img");
                    para3.src = element.imageUrl;
                    para3.classList.add("para3");
                    

                    lol.appendChild(cont);
                    cont.appendChild(para3);
                    cont.appendChild(para);
                    cont.appendChild(para2);
                } else if(searchValue === 'beach' || searchValue === 'beaches'){
                    console.log(element)
                    console.log(element.name)
                    let cont = document.createElement("div");
                    cont.className = 'cont'
                    console.log(cont)
                    let para = document.createElement("p");
                    para.classList.add("para");
                    para.innerHTML = element.name;
                    let para2 = document.createElement("p");
                    para2.classList.add("para2");
                    para2.innerHTML = element.description;
                    let para3 = document.createElement("img");
                    para3.src = element.imageUrl;
                    para3.classList.add("para3");
                    

                    lol.appendChild(cont);
                    cont.appendChild(para3);
                    cont.appendChild(para);
                    cont.appendChild(para2);
                }
                
                
            });

        })    //imprimir los datos en la consola
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    });

    

    
    