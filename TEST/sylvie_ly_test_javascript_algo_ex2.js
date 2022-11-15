/*Je mets le tableau ici pour l'instant pour faciliter les tests des fonctions*/
var testT = [1,5,6,3,2,9,4,7,8];


/*Question 1 et Question 2*/ 
/*F21=acceptInput et A=tab*/

/*fonction qui aide à voir si l'element est deja present dans le tableau*/
function notDistinct(myTab,el){
    let tabL = myTab.length;
    for(let i=0; i<tabL;i++){
        if(myTab[i]===el){
            return true;
        }
    }
    return false;
}

function acceptInput(tab){
    let tabLength = tab.length;
    let verif = new Array(9);
    for(let i=0; i<tabLength; i++){
        
        if(typeof tab[i] !== "number" || tab[i]>9 || tab[i]<1 || notDistinct(verif,tab[i])){ /* on utilise la fonction notDistinct pour voir si l'element est distinct*/
            return false;
        }
        verif[i]=tab[i];

    }
    return true;
    
}





/*Question 3*/ 

document.write(acceptInput(testT));
document.write('<br> ');
document.write('<br> ');
