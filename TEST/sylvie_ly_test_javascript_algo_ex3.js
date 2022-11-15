//import {acceptInput} from 'sylvie_ly_javascript_algo_ex2'

/*Je mets le tableau ici pour l'instant pour faciliter les tests des fonctions*/
var array_number = new Array(9);
array_number[0]= "4 4 7 3 5 1 9 8 6"; 
array_number[1]= "9 8 3 7 6 2 5 1 4"; 
array_number[2]= "1 5 6 8 9 4 7 2 3"; 
array_number[3]= "2 3 9 1 8 5 4 6 7"; 
array_number[4]= "7 4 1 6 3 9 2 5 8"; 
array_number[5]= "5 6 8 2 4 7 1 3 9"; 
array_number[6]= "8 7 2 9 1 3 6 4 5"; 
array_number[7]= "3 9 5 4 2 6 8 7 1"; 
array_number[8]= "6 1 4 5 7 8 3 9 6";

/*J'ai pas reussi a lier les 2 fichiers js pour pouvoir utiliser la fonction donc je remet la fonction ici */

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


/*Question 1 */
/*F31=anomalyCheck*/
function anomalyCheck(myTab){
    let chck=true;
    
    let tab=[];

    for(let i=0;i<9;i++){
        
        for(let j=0;j<9;j++){
        
            tab[j]=Number(myTab[i][j]);
        }
        
        chck=acceptInput(myTab[i]);

        if(!chck){
            document.write('Line '+ i + ' incorrect ' + myTab[i]);
            document.write('<br> ');
        }else{
            continue;
        }
    }
    
    
}

anomalyCheck(array_number);

/*Probleme sur les tableaux rentres en parametres et la lecture du coup on aura toujours false */