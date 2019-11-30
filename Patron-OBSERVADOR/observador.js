let Subject = function(){
    this.observers = [];
};

Subject.prototype.addObserver = function(observer){
    this.observers.push(observer)
};

Subject.prototype.removeObserver = function(observer){
    let keyToDelete = observer.key
    let keysArray = this.observers.map(function(e){
        return e.key
    });
    let indexToDelete = keysArray.indexOf(keyToDelete);
    this.observers.splice(indexToDelete,1);
}

Subject.prototype.notify = function(key){
    this.observers.forEach(element => {
        if(element.key === key){
            element.listener(key);      
        }        
    });
};

let Observer = function(key, listener){
    this.key = key;
    this.listener = listener;
};
let saltar = new Observer (87, function(event){
    personaje.saltar()
});

let agachar = new Observer (83, function(event){
    personaje.agachar()
});

let correr = new Observer (68, function(event){
    personaje.correr()
});

let darseVuelta = new Observer (65, function(event){
    personaje.darseVuelta()
});

let recogerArma = new Observer (70, function(event){
    personaje.recogerArma()
    if(personaje.obtenerArma === false){
        subject.addObserver(disparar);
    }
});



let disparar = new Observer (32, function(event){
    
    personaje.disparar()
});

let subject = new Subject ();

subject.addObserver(saltar);
subject.addObserver(agachar);
subject.addObserver(correr);
subject.addObserver(darseVuelta);
subject.addObserver(recogerArma);

let personaje =(function() {
    let arma= false,
    saltar = function(){
        imagen.setAttribute ('src', 'saltar.jpg')
    }
    agachar= function(){
        imagen.setAttribute ('src', 'agacharse.png')
    }
    correr= function(){
        imagen.setAttribute ('src', 'correr.jpeg')
    }
    darseVuelta= function(){
        imagen.setAttribute ('src', 'parar.jpg')
    }
    disparar= function(){
        imagen.setAttribute ('src', 'disparar.jpg')
    }
    recogerArma= function(){
        arma= true;
        imagen.setAttribute ('src', 'recoger.jpg')
    }
    obtenerArma= function(){
        return arma
    }
    
    return {
        obtenerArma: obtenerArma,
        saltar: saltar,
        agachar: agachar,
        correr: correr,
        darseVuelta: darseVuelta,
        disparar: disparar,
        tirarArma: tirarArma,
        recogerArma: recogerArma
    }
})();

let body = document.getElementById('body');

body.addEventListener('keydown', function(event){
    subject.notify(parseInt(event.keyCode));
});
let imagen = document.getElementById('imagen');