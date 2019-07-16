var p = document.getElementsByTagName('p');
var div = document.getElementById('dane');
var dane = [];

const dropHandler = (ev) =>
{
    var plik;
    var daneZPliku;    
    
    ev.preventDefault(); // odblokowanie div-a z atrybutami zdarzen na przeniesienie pliku
    ev.stopPropagation();    
    
    plik = ev.dataTransfer.files;
//    console.log(plik);  sprawdzenie co zostalo pobrane po przeniesieniu pliku (tablica z plikami)
    
//    console.log(plik[0]); wyświetlenie 1. pozycji z tablicy
    
    if(plik[0].type === 'text/plain') //sprawdzenie warunku czy przeniesiony pplik jest txt
//        console.log('prawda');      
    
    var reader = new FileReader(); //utworzenie objektu FileReader, który pomoże w obsludze wczytanych danych
   
    reader.readAsText(plik[0]); //wywolanie metody zamiany wczytanych danych na text
    
    reader.onloadend = function()  //wywolanie funkcji zapisującej dane do zmiennej
    {     
        daneZPliku = reader.result;
//        console.log(daneZPliku);
        dane = daneZPliku.split('\s');
        console.log(dane);
        ev.target.className = 'gotowy';
    };    
    p.innerHTML = 'Dane wczytane'; 
    p.className = 'gotowy';
};

const dragOverHandler = (ev) => //bez tej funcji przeglądarka nie będzie widziala div-a do którego możemy prznieść plik
{
    ev.preventDefault(); // odblokowanie div-a z atrybutami zdarzen na przeniesienie pliku
    ev.stopPropagation();
    ev.dataTransfer.dropEffect = 'copy';
        
    ev.target.className = "gotowy";
    p.className = 'gotowy';
    p.innerHTML = 'Gotowe. Upuść plik.';
    
};

const dragLeave = (ev) =>
{
    ev.target.className = "pusty";
    p.innerHTML = 'Przeciągnij plik z danymi'; 
};



