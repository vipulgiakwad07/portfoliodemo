

//--on click Experiance

function addNewEField() {
    
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wexField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("placeholder",  "Enter experience")
    

    let exOb = document.getElementById("ex");
    let experienceaddidOb= document.getElementById("experienceaddid");

    
    exOb.insertBefore(newNode, experienceaddidOb); 
}



//--on click qulaifi
function addNewQuField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("qualField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("placeholder",   "Enter Qualification");
    
    let QuaOb = document.getElementById("Qua");
    let QuaaddidOb= document.getElementById("Quaaddid");

    
    QuaOb.insertBefore(newNode, qualificationaddid);

}


//--on click Skill

function addNewSKField() {
    
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("placeholder","Enter Skill")
    
    let SKOb = document.getElementById("sk");
    let skilleaddidOb= document.getElementById("skilleaddid");

    
    SKOb.insertBefore(newNode, skilleaddidOb); 
}



function generatPortfolio(){

               var webV =document.getElementById("websField").value;
                  //--replacing name--

  
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    
    nameT=document.getElementById("nameT");
    nameT.innerHTML = nameField; 
         
    //--direct --replacing name----
   
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("nameT3").innerHTML=nameField;
    document.getElementById("nameT4").innerHTML=nameField;

    //--replacing contact--
    document.getElementById("profeionT").innerHTML = document.getElementById("profetionField").value;

     //--replacing profetion--

    //document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("contnoT").innerHTML = document.getElementById("contactField").value;
      
      //--replacing contact--

    //document.getElementById("AddrT").innerHTML = document.getElementById("AdressField").value;
    document.getElementById("addrsT").innerHTML = document.getElementById("AdressField").value;
       
    
     //--link-- emailField
         
     document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

        
       //--replacing fblik--

       document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

          //--replacing insta--

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;


    //--replacing linked--
   
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedtField").value;


           //--replacing printrest--

    document.getElementById("priT").innerHTML = document.getElementById("priField").value;
   
   

     // ---Adding work experience


   let wxp = document.getElementsByClassName("wexField");
   let str = "";
             for(let e of  wxp){     
              str =str +`<li> ${e.value} </li>`;
             }
          document.getElementById("weT").innerHTML =str;
          document.getElementById("weT1").innerHTML =str; 



           

    let quliv = document.getElementsByClassName("qualiField");
    let strnq = "";
              for(let e of  quliv){     
               strnq = strnq + `<li> ${e.value} </li>`;
              }
           document.getElementById("aqT").innerHTML =strnq; 
           document.getElementById("aqT1").innerHTML =strnq;

           document.getElementById("cv-form").style.display="none";
           document.getElementById("cv-template").style.display="block";



    }

//--Generating pdf--//

function Expdf(){
    window.print();
}