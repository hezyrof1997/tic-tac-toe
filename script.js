let i = 0; let gracz1 = ""; let gracz2 = ""; let tablicaTD = [];

/* funkcja główna*/

(function () {

    wybierzTryb();

})();

/* funkcja do wyboru trybu */

function wybierzTryb() {


    let wybor = document.querySelector(".container");
    wybor.innerHTML = `  <div class="naglowek">Wybierz tryb gry</div>
    <div class="znaki">

    <div class="one">Z<br>KOMPUTEREM</div>
    <div class="two">2<br>GRACZY</div>


    </div>`;

    wybor.classList.add("containerWybor");

    document.querySelector(".one").addEventListener("click", () => {

        tryb = 1;

       // wybierzZnak();

       alert("tryb w budowie");
       location.reload();

    })

    document.querySelector(".two").addEventListener("click", () => {

        tryb = 2;

        wybierzZnak();

    })

}

/* funkcja do wyboru znaku */

function wybierzZnak() {

    let wybor = document.querySelector(".container");
    wybor.innerHTML = `  <div class="naglowek">Wybierz znak dla GRACZ1</div>
    <div class="znaki">

<div class="X">X</div>
<div class="O">O</div>

    </div>
    <div class="menu">MENU</div>`;

    document.querySelector(".menu").addEventListener("click",()=>{    location.reload()})
    wybor.classList.add("containerWybor");

    document.querySelector(".X").addEventListener("click", () => {

        gracz1 = "X";
        gracz2 = "O";

        wybierzZaczynajacego();

    })

    document.querySelector(".O").addEventListener("click", () => {

        gracz1 = "O";
        gracz2 = "X";

        wybierzZaczynajacego();

    })


}

/* funkcja do wyboru zaczynajacego */

function wybierzZaczynajacego() {

    let wybor = document.querySelector(".container");
    wybor.innerHTML = `  <div class="naglowek">Wybierz kto zaczyna</div>
    <div class="znaki">

<div class="g1">GRACZ1</div>
<div class="g2">GRACZ2</div>


    </div>
    <div class="menu">MENU</div>`;

    document.querySelector(".menu").addEventListener("click",()=>{    location.reload()})
    wybor.classList.add("containerWybor");

    document.querySelector(".g1").addEventListener("click", () => {

        i = 0;

        rysujPlansze();

    })

    document.querySelector(".g2").addEventListener("click", () => {

        i = 1;

        rysujPlansze();
    })


}

/* funkcja do rysowania planszy i robienia z niej tablicy */

function rysujPlansze() {
    let plansza = document.querySelector(".container");
    plansza.innerHTML = `<div class="plansza">

    <div class="naglowek"></div>
    <div class="naglowek2"></div>

<table>

    <tr>
    
        <td style="display:none">0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>

    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>

    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
    </tr>

</table>

<div class="stopka"></div>
<div class="restart">RESTART</div>
<div class="menu">MENU</div>

</div>

`;

    stopka = document.querySelector(".stopka");
    restart= document.querySelector(".restart").addEventListener("click",()=>{
        
     
        plansza.classList.remove("containerPlansza");
        plansza.classList.add("containerWybor");
        wybierzZnak();
        
    
    })

    document.querySelector(".menu").addEventListener("click",()=>{    location.reload()})


    document.querySelector(".naglowek").innerHTML = (`GRACZ1 gra ${gracz1} <br>GRACZ2 gra ${gracz2}`);

    if (i % 2 == 0) { document.querySelector(".naglowek2").innerHTML = "Tura gracza" + (i % 2 + 1) }
    else { document.querySelector(".naglowek2").innerHTML = "Tura gracza" + (i % 2 + 1) }




    /* zmiana wygladu containera */

    plansza.classList.remove("containerWybor");
    plansza.classList.add("containerPlansza");


    /* robienie tablicy z tabeli */

    let td = document.querySelectorAll("td");



    td.forEach((wartosc, index) => {

        tablicaTD[index] = wartosc;

        console.log(tablicaTD[index].innerText);

        tablicaTD[index].classList.add("unclicked");

    })

    events();


}

/* dodawanie eventow do pól tabeli  */

function events() {
    for (let j = 0; j < tablicaTD.length; j++) {


        tablicaTD[j].addEventListener("click", () => {

            console.log("i = " + i);

            document.querySelector(".naglowek").innerHTML = (`GRACZ1 gra ${gracz1} <br>GRACZ2 gra ${gracz2}`);

            if (i % 2 == 0 && tablicaTD[j].innerHTML != "X" && tablicaTD[j].innerHTML != "O" && stopka.innerHTML == "") {
                tablicaTD[j].innerHTML = gracz1; i++;
                tablicaTD[j].classList.add("disabledPionterEvents");

                document.querySelector(".naglowek2").innerHTML = "Tura gracza " + (i % 2 + 1);
                tablicaTD[j].classList.remove("unclicked");

            }
            else if (i % 2 == 1 && tablicaTD[j].innerHTML != "X" && tablicaTD[j].innerHTML != "O" && stopka.innerHTML == "") {
                tablicaTD[j].innerHTML = gracz2; i++;
                tablicaTD[j].classList.add("disabledPionterEvents");

                document.querySelector(".naglowek2").innerHTML = "Tura gracza " + (i % 2 + 1);
                tablicaTD[j].classList.remove("unclicked");

            }

            sprawdz();


        });



    }
}

/* sprawdzanie wygranej */

function sprawdz() {

    let naglowek2=document.querySelector(".naglowek2");
    let tabela = document.querySelector("table");

    if (tablicaTD[1].innerHTML == tablicaTD[4].innerHTML && tablicaTD[4].innerHTML == tablicaTD[7].innerHTML && tablicaTD[4].innerHTML == 'O') {

        stopka.style.display = "block";
        stopka.innerHTML = "O wygrywa";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[1].classList.add("wygrana");
        tablicaTD[4].classList.add("wygrana");
        tablicaTD[7].classList.add("wygrana");

    }
    else if (tablicaTD[1].innerHTML == tablicaTD[4].innerHTML && tablicaTD[4].innerHTML == tablicaTD[7].innerHTML && tablicaTD[4].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[1].classList.add("wygrana");
        tablicaTD[4].classList.add("wygrana");
        tablicaTD[7].classList.add("wygrana");

    }
    else if (tablicaTD[1].innerHTML == tablicaTD[2].innerHTML && tablicaTD[2].innerHTML == tablicaTD[3].innerHTML && tablicaTD[3].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[1].classList.add("wygrana");
        tablicaTD[2].classList.add("wygrana");
        tablicaTD[3].classList.add("wygrana");

    }
    else if (tablicaTD[1].innerHTML == tablicaTD[2].innerHTML && tablicaTD[2].innerHTML == tablicaTD[3].innerHTML && tablicaTD[3].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[1].classList.add("wygrana");
        tablicaTD[2].classList.add("wygrana");
        tablicaTD[3].classList.add("wygrana");
    }
    else if (tablicaTD[4].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[6].innerHTML && tablicaTD[6].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[4].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[6].classList.add("wygrana");

    }
    else if (tablicaTD[4].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[6].innerHTML && tablicaTD[6].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[4].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[6].classList.add("wygrana");

    }
    else if (tablicaTD[7].innerHTML == tablicaTD[8].innerHTML && tablicaTD[8].innerHTML == tablicaTD[9].innerHTML && tablicaTD[9].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[7].classList.add("wygrana");
        tablicaTD[8].classList.add("wygrana");
        tablicaTD[9].classList.add("wygrana");

    }
    else if (tablicaTD[7].innerHTML == tablicaTD[8].innerHTML && tablicaTD[8].innerHTML == tablicaTD[9].innerHTML && tablicaTD[9].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[7].classList.add("wygrana");
        tablicaTD[8].classList.add("wygrana");
        tablicaTD[9].classList.add("wygrana");

    }
    else if (tablicaTD[2].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[8].innerHTML && tablicaTD[8].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[2].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[8].classList.add("wygrana");

    }
    else if (tablicaTD[2].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[8].innerHTML && tablicaTD[8].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[2].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[8].classList.add("wygrana");

    }
    else if (tablicaTD[3].innerHTML == tablicaTD[6].innerHTML && tablicaTD[6].innerHTML == tablicaTD[9].innerHTML && tablicaTD[9].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[3].classList.add("wygrana");
        tablicaTD[6].classList.add("wygrana");
        tablicaTD[9].classList.add("wygrana");

    }
    else if (tablicaTD[3].innerHTML == tablicaTD[6].innerHTML && tablicaTD[6].innerHTML == tablicaTD[9].innerHTML && tablicaTD[9].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[3].classList.add("wygrana");
        tablicaTD[6].classList.add("wygrana");
        tablicaTD[9].classList.add("wygrana");

    }
    else if (tablicaTD[1].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[9].innerHTML && tablicaTD[9].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[1].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[9].classList.add("wygrana");

    }
    else if (tablicaTD[1].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[9].innerHTML && tablicaTD[9].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[1].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[9].classList.add("wygrana");

    }
    else if (tablicaTD[7].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[3].innerHTML && tablicaTD[3].innerHTML == 'O') {

        stopka.innerHTML = "O wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[7].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[3].classList.add("wygrana");

    }
    else if (tablicaTD[7].innerHTML == tablicaTD[5].innerHTML && tablicaTD[5].innerHTML == tablicaTD[3].innerHTML && tablicaTD[3].innerHTML == 'X') {

        stopka.innerHTML = "X wygrywa";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        tablicaTD[7].classList.add("wygrana");
        tablicaTD[5].classList.add("wygrana");
        tablicaTD[3].classList.add("wygrana");

    }
    else if ((tablicaTD[1].innerHTML == 'X' || tablicaTD[1].innerHTML == 'O') && (tablicaTD[2].innerHTML == 'X' || tablicaTD[2].innerHTML == 'O') && (tablicaTD[3].innerHTML == 'X' || tablicaTD[3].innerHTML == 'O') && (tablicaTD[4].innerHTML == 'X' || tablicaTD[4].innerHTML == 'O') && (tablicaTD[5].innerHTML == 'X' || tablicaTD[5].innerHTML == 'O') && (tablicaTD[6].innerHTML == 'X' || tablicaTD[6].innerHTML == 'O') && (tablicaTD[7].innerHTML == 'X' || tablicaTD[7].innerHTML == 'O') && (tablicaTD[8].innerHTML == 'X' || tablicaTD[8].innerHTML == 'O') && (tablicaTD[9].innerHTML == 'X' || tablicaTD[9].innerHTML == 'O')) {

        stopka.innerHTML = "REMIS";
        stopka.style.display = "block";
        naglowek2.classList.add("naglowekHidden");
        tabela.classList.add("disabledPionterEvents");

        for (let l = 1; l < 10; l++) {

            tablicaTD[l].classList.add("wygrana");

        }


    }

}