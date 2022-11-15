const d = document;

let body = d.querySelector('body');

let main = d.createElement('main'),
    footer = d.createElement('footer');


let API_URL = 'https://dummyjson.com';


fetch(`${API_URL}/products/category/mens-shirts`)
.then(res => res.json())
.then(productos => localStorage.setItem('productos', JSON.stringify(productos.products)))

let productos = JSON.parse( localStorage.getItem('productos'));



function mostrar(rootElement, data){
    let div = d.createElement('div');
        div.classList = 'producto';
        
              
    let imagen = d.createElement('img');
        imagen.src = data.thumbnail;
    
    let h2 = d.createElement('h3');
    let titulo = d.createTextNode(data.title)
    h2.appendChild(titulo);
   
    let h3 = d.createElement('h3');
    let marca = d.createTextNode(data.brand);
    h3.appendChild(marca);

    let a = d.createElement('a');
        a.setAttribute('id', data.id);
        // a.href = ("https://agenciadeaprendizaje.bue.edu.ar/")
        


    let button = d.createElement('button');
        button.classList= "buyButton"
    let comprar = d.createTextNode('Comprar');
    button.appendChild(comprar);
    
    
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(imagen);
    div.appendChild(a);
    a.appendChild(button);
    
    rootElement.appendChild(div);          
}


let apiDiv = d.querySelector(".api-json");
productos.forEach( e => mostrar(apiDiv,e));

let sixteen = d.getElementById('51')
    sixteen.href = "https://tiendamia.com/ar"

let seventeen = d.getElementById('52')
    seventeen.href = "https://tiendamia.com/ar"


let eighteen = d.getElementById('53')
    eighteen.href = "https://tiendamia.com/ar"


let nineteen = d.getElementById('54')
    nineteen.href = "https://tiendamia.com/ar"


let twenty = d.getElementById('55')
    twenty.href = "https://tiendamia.com/ar"





