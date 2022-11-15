

/*Je mets le tableau ici pour l'instant pour faciliter les tests des fonctions*/
var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6"; 
array_number[1]= "9 8 3 7 6 2 5 1 4"; 
array_number[2]= "1 5 6 8 9 4 7 2 3"; 
array_number[3]= "2 3 9 1 8 5 4 6 7"; 
array_number[4]= "7 4 1 6 3 9 2 5 8"; 
array_number[5]= "5 6 8 2 4 7 1 3 9"; 
array_number[6]= "8 7 2 9 1 3 6 4 5"; 
array_number[7]= "3 9 5 4 2 6 8 7 1"; 
array_number[8]= "6 1 4 5 7 8 3 9 6";

//const divResultat = document.querySelector("#resultat");

/*document.write(array_number); pour verifier */
//document.write(typeof array_number);
/*Question 1*/

let to_verify = new Array(9);
for(var i=0; i<9; i++){
    to_verify[i]= new Array(9);
}

/*Question 2*/
/*F11 = readTable*/


function readTable(myTable){

    /*lire le tableau myTable */
    document.write(myTable + '<br>');
    document.write('<br>');

    /*transfere dans le tableau to_verify */
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            to_verify[i]=myTable[i];
        }
    }
    //document.write(to_verify);
}


/*Question 3*/
/*F12 = displayTable*/

function displayTable(){
    document.write('<div class="container text-center">');
    
    for(let i=0; i<9; i++){
        
        for(let j=0; j<9; j++){
            
            document.write(to_verify[i][j]);
            
        }
        
        document.write('<br>');
        document.write('<br>');
    }
    
    document.write('</div>');
}

/*Question 4*/
readTable(array_number);
displayTable();

/*Probleme ils affichent que la moitié des nombres car ils ne considèrent pas que ce sont des tableaux de numbers*/
