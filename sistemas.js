var  sistema_operacional= "linux";
 function sistema () {
   switch (sistema_operacional) {
       case"linux":
             return "O Linux é um sistema operacional de código aberto."
      break;
       
     case "windowns":
          return "O Windows é um sistema operacional da empresa Microsoft."
    break;
     case "macOs":
           return "O macOS é um sistema operacional da empresa Apple."
       break;
     case "chromeOS":
       
       return "O Chrome OS é um sistema operacional da empresa Google."
       break;
        default:
            return "Há a possibilidade de você estar utilizando um sistema mobile."
       
   
   } 
 }
console.log (sistema("linux"))