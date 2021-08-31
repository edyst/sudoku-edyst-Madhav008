var lvl=[]
var curlvl='null'
 var old=0;
var wrong=[]
var glowedr=[];
var glowedc=[];
var glowedg=[];
let ivalue=0;
var selected=0;
var oldtobe=0;
function validate(i){
  
  let tobecorrected=document.querySelector(`#cell-${i} input`).value 
 // console.log(`tobe=${tobecorrected}`)

  if(tobecorrected<10 && tobecorrected>0){
    oldtobe=tobecorrected;
   
  document.querySelector(`#cell-${i} input`).value=tobecorrected;}
   if(oldtobe!=0&&tobecorrected!=""&&tobecorrected<1)
   document.querySelector(`#cell-${i} input`).value="";
   if(oldtobe!=0&&tobecorrected!=""&&tobecorrected>9){
    document.querySelector(`#cell-${i} input`).value=oldtobe;
  }
  localStorage.setItem(`${curlvl}${i}`,JSON.stringify(document.querySelector(`#cell-${i} input`).value))
    document.querySelector(`#cell-${i}`).classList.add("selected")
    if(selected!=0 && selected!=i)
    document.querySelector(`#cell-${selected}`).classList.remove("selected")
    selected=i;
    if(tobecorrected=="")
    lvl[i-1]="-1"
    else
    lvl[i-1]=document.querySelector(`#cell-${i} input`).value 

  // for(let h in lvl){
  //   let g=Number(h)+1;
  //   // curlvl=JSON.parse(localStorage.getItem("level"))
    
  // }


 for(let j in lvl){
    let k=Number(j)+1;
    ivalue=document.querySelector(`#cell-${i} input`).value
    //console.log(`ivalue=${ivalue}`)
   if(lvl[j]!=0 && lvl[j]==ivalue)
     document.querySelector(`#cell-${k}`).classList.add("same")
   if(old!=0&&old!=ivalue)
     removesame(old)
   }

   console.log(lvl)
   console.log(old)
    old=ivalue;
    if (old=="")
    old=-1
    
    
    
    
    rowsOK();
    columnsOK();
   groupsOK();

    
}
function validat(){
  console.log(lvl)                      
  // 
  console.log(wrong.length)
if(wrong.length==0 && lvl.length==81 &&!lvl.includes("-1") &&!lvl.includes(0)){
document.getElementById("won").innerText="You won!!";
//document.getElementById("play").classList.add("fadeout")
document.getElementById("play").classList.toggle("hide")
document.getElementById("won").classList.toggle("hide")
document.getElementById("won").classList.toggle("fadein")
}
else if(wrong.length!=0 && lvl.length==81 ){
  document.getElementById("won").innerText="Something wrong !!";
  document.getElementById("play").classList.toggle("hide")
document.getElementById("won").classList.toggle("hide")
document.getElementById("won").classList.toggle("fadein")
}
else if(lvl.length==81){
  document.getElementById("won").innerText="Complete it!!";
  document.getElementById("play").classList.toggle("hide")
document.getElementById("won").classList.toggle("hide")
document.getElementById("won").classList.toggle("fadein")
console.log(lvl.length)
}}
function removesame(val){
 
  for(let j in lvl){
   
    let k=Number(j)+1;
   // let ivalue=document.querySelector(`#cell-${i} input`).value
    if(lvl[j]!=0 && lvl[j]==val)
  document.querySelector(`#cell-${k}`).classList.remove("same")
}}
function rowsOK(){
    
    for(let i=1;i<=9;i++){
  //      console.log(i)
        rowOK(i);
    }
    
}
function rowGlow(n){
  for (let i=0;i<9;i++){
    if(glowedg.length>0){
  document.querySelector(`#cell-${glowedg.shift()}`).classList.remove("glow")
  document.querySelector(`#cell-${glowedc.shift()}`).classList.remove("glow")
  document.querySelector(`#cell-${glowedr.shift()}`).classList.remove("glow")
}}
  const first=(n-1)*9+1;
  const last=n*9;
  
  //console.log(n);
  for(let i=first ;i<=last;i++){
   // if(glowedr.length==9)
   //  document.querySelector(`#cell-${glowedr.shift()}`).classList.remove("glow")
    document.querySelector(`#cell-${i}`).classList.add("glow")
    glowedr.push(i);
  }
 // console.log(glowedr)
}

function rowOK(n){
    const rowN=[]
    const first=(n-1)*9+1;
    const last=n*9;
    
  //  console.log(n);
    for(let i=first ;i<=last;i++){
     // document.querySelector(`#cell-${i}`).classList.add("wrong")
        const v=document.querySelector(`#cell-${i} input`).value;
        
        if(v!==""){
         if(rowN.includes(v)){
            wrong.push(i) 
          //  console.log(i)
            
            const existed=rowN.indexOf(v)
         //   console.log(existed)
          //  console.log(n)
          //  console.log(9*(n-1))
          //  console.log(existed+(9*(n-1)+1))
            wrong.push(existed+(9*(n-1)+1))
         }
         
           rowN.push(v);}
           else rowN.push("-")
    }
    
  for(let i in wrong){
    
       document.getElementById(`cell-${wrong[i]}`).classList.add("wrong")}
      // console.log(wrong)
     for(let j=0;j<wrong.length;j=j+2){
           const k=Number(j)+1;
         //  console.log(document.querySelector(`#cell-${wrong[j]} input`).value)
         //  console.log(document.querySelector(`#cell-${wrong[k]} input`).value)
           if(document.querySelector(`#cell-${wrong[j]} input`).value!=document.querySelector(`#cell-${wrong[k]} input`).value)
           {
          //   console.log(wrong[j])
         //   console.log(wrong[j+1])
               document.getElementById(`cell-${wrong[j]}`).classList.remove("wrong")
           document.getElementById(`cell-${wrong[k]}`).classList.remove("wrong")
           wrong.splice(j,2)
          // console.log(wrong)
        }
        }
  
   
}

function columnsOK(){
    
    for(let i=1;i<=9;i++){
     //   console.log(i)
        columnOK(i);
    }
    
}
function columnGlow(n){
 
  const first=n;
  const last=n+72;
 // let j=0;
 // console.log("row");
  for(let i=first ;i<=last;i=i+9){
   // if(glowedc.length==9)
  //   document.querySelector(`#cell-${glowedc.shift()}`).classList.remove("glow")
    document.querySelector(`#cell-${i}`).classList.add("glow")
    glowedc.push(i);
  }
  //console.log(glowedc)
  }


function columnOK(n){
    const colN=[]
    const first=n;
    const last=n+72;
   // let j=0;
   // console.log("row");
    for(let i=first ;i<=last;i=i+9){
     // j=j+1;
        const v=document.querySelector(`#cell-${i} input`).value;
        if(v!==""){
         if(colN.includes(v)){
            wrong.push(i) 
      //      console.log(i)
            
            const existed=colN.indexOf(v)
         //   console.log(existed*9+n)
            wrong.push(existed*9+n)
         }
         
           colN.push(v);}
           else colN.push("-")
    }
    
  for(let i in wrong){
    
       document.getElementById(`cell-${wrong[i]}`).classList.add("wrong")}
      // console.log(wrong)
    //  for(let j=0;j<wrong.length;j=j+2){
    //        const k=Number(j)+1;
    //        console.log(document.querySelector(`#cell-${wrong[j]} input`).value)
    //        console.log(document.querySelector(`#cell-${wrong[k]} input`).value)
    //        if(document.querySelector(`#cell-${wrong[j]} input`).value!=document.querySelector(`#cell-${wrong[k]} input`).value)
    //        {console.log(wrong[j])
    //         console.log(wrong[j+1])
    //            document.getElementById(`cell-${wrong[j]}`).classList.remove("wrong")
    //        document.getElementById(`cell-${wrong[k]}`).classList.remove("wrong")
    //        wrong.splice(j,2)
    //        console.log(wrong)
    //     }
    //     }
  
   
}

//group

function groupsOK(){
    
  for(let i=1;i<=9;i++){
    //  console.log(i)
      groupOK(i);
  }
}
  function groupGlow(n){
  //  console.log(n);
    const first=3*(n-1)+18*Math.floor((n-1)/3)+1;
    const last=first+20;
    //let j=0;
   // console.log("row");
    for(let i=first ;i<=last;i++){
     // j=j+1;
     if(i==first+3||i==first+12)
     i=i+6;
     //if(glowedg.length==9)
     //document.querySelector(`#cell-${glowedg.shift()}`).classList.remove("glow")
     document.querySelector(`#cell-${i}`).classList.add("glow")
     glowedg.push(i);
    }

  
  }


function groupOK(n){
  const groupN=[]
  const first=3*(n-1)+18*Math.floor((n-1)/3)+1;
  const last=first+20;
  //let j=0;
 // console.log("row");
  for(let i=first ;i<=last;i++){
   // j=j+1;
   if(i==first+3||i==first+12)
   i=i+6;
  // console.log(i)
      const v=document.querySelector(`#cell-${i} input`).value;
      if(v!==""){
       if(groupN.includes(v)){
          wrong.push(i) 
       //   console.log(i)
          
          const existed=groupN.indexOf(v)
        //  console.log(first+(Math.floor(existed/3))*9+(existed%3))
          wrong.push(first+(Math.floor(existed/3))*9+(existed%3))
       }
       
       groupN.push(v);}
         else groupN.push("-")
  }
  
for(let i in wrong){
  
     document.getElementById(`cell-${wrong[i]}`).classList.add("wrong")}

for(let j=0;j<wrong.length;j=j+2){
             const k=Number(j)+1;
            // console.log(document.querySelector(`#cell-${wrong[j]} input`).value)
            // console.log(document.querySelector(`#cell-${wrong[k]} input`).value)
             if(document.querySelector(`#cell-${wrong[j]} input`).value!=document.querySelector(`#cell-${wrong[k]} input`).value)
             {//console.log(wrong[j])
              //console.log(wrong[j+1])
                 document.getElementById(`cell-${wrong[j]}`).classList.remove("wrong")
             document.getElementById(`cell-${wrong[k]}`).classList.remove("wrong")
             wrong.splice(j,2)
           //  console.log(wrong)
          }
          }
        }


        const easylvl=[
          [0, 3, 0, 6, 7, 8, 9, 0, 2],
          [6, 7, 2, 1, 0, 0, 3, 4, 0],
          [1, 0, 0, 3, 4, 2, 5, 6, 0],
          [0, 5, 9, 7, 0, 1, 0, 2, 0],
          [4, 0, 6, 0, 5, 0, 7, 9, 1],
          [0, 0, 3, 9, 2, 0, 8, 5, 6],
          [9, 0, 1, 5, 0, 0, 2, 0, 4],
          [2, 8, 7, 0, 1, 9, 6, 3, 5],
          [3, 0, 0, 0, 8, 0, 1, 7, 0]
        ]
      let easy=[]
      for(i in easylvl){
         // console.log(easylvl[i])
           easy=[...easy,...easylvl[i]]
      }
     
function setupeasy(){
  document.getElementById("no").classList.remove("hide")
  document.getElementsByClassName("buttonflex2")[0].setAttribute("id","buttons2")
  document.getElementsByClassName("buttonflex2")[0].classList.remove("hide")
  document.getElementsByClassName("button3")[0].classList.add("hide")
  lvl=[...easy];
  for(let i=1;i<=81;i++){
    document.querySelector(`#cell-${i} input`).removeAttribute("type")
document.querySelector(`#cell-${i} input`).setAttribute("type","number")

localStorage.setItem("level",JSON.stringify("easy"))
curlvl="easy"
}
  
//console.log(easy)
for(let i in easy){
    
   // console.log(i);
    var j=Number(i)+1;
    document.querySelector(`#cell-${j}`).classList.remove("same")
   // console.log(j);
    if(easy[i]=='0')
    {document.querySelector(`#cell-${j} input`).value=""
    document.querySelector(`#cell-${j}`).classList.remove("disabled")
    document.querySelector(`#cell-${j} input`).disabled =false;
  
  }
    else{
       // console.log(document.querySelector(`#cell-${j} input`))
   document.querySelector(`#cell-${j} input`).value=easy[i]
   localStorage.setItem(`easy${j}`,JSON.stringify(easy[i]))
 //  document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
   document.querySelector(`#cell-${j}`).classList.add("disabled")
   document.querySelector(`#cell-${j} input`).disabled =true;
}}}
function localeasy(){
  console.log(`easy ${easy}`)
  for(let i in easy){
    
    // console.log(i);
     var j=Number(i)+1;
     document.querySelector(`#cell-${j}`).classList.remove("same")
     document.querySelector(`#cell-${j}`).classList.remove("wrong")
    // console.log(j);
     if(easy[i]=='0')
     {document.querySelector(`#cell-${j} input`).value=""
     document.querySelector(`#cell-${j}`).classList.remove("disabled")
     document.querySelector(`#cell-${j} input`).disabled =false;
   
   }
     else{
        // console.log(document.querySelector(`#cell-${j} input`))
    document.querySelector(`#cell-${j} input`).value=easy[i]
    localStorage.setItem(`easy${j}`,JSON.stringify(easy[i]))
  //  document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
    document.querySelector(`#cell-${j}`).classList.add("disabled")
    document.querySelector(`#cell-${j} input`).disabled =true;
 }}
}
const medlvl=[
  [0, 3, 0, 6, 0, 8, 9, 0, 2],
  [6, 0, 2, 1, 0, 0, 3, 4, 0],
  [1, 0, 0, 3, 0, 2, 0, 6, 0],
  [0, 5, 0, 7, 0, 1, 0, 2, 0],
  [4, 0, 6, 0, 5, 0, 0, 0, 1],
  [0, 0, 3, 0, 2, 0, 8, 0, 6],
  [0, 0, 1, 5, 0, 0, 2, 0, 4],
  [2, 8, 7, 0, 1, 0, 0, 0, 5],
  [3, 0, 0, 0, 8, 0, 0, 7, 0]
]
var med=[]
for(i in medlvl){
 // console.log(easylvl[i])
   med=[...med,...medlvl[i]]
}
function setupmed(){
  document.getElementById("no").classList.remove("hide")
  document.getElementsByClassName("buttonflex2")[0].setAttribute("id","buttons2")
  document.getElementsByClassName("buttonflex2")[0].classList.remove("hide")
  document.getElementsByClassName("button3")[0].classList.add("hide")
  for(let i=1;i<=81;i++){
    document.querySelector(`#cell-${i} input`).removeAttribute("type")
document.querySelector(`#cell-${i} input`).setAttribute("type","number")
localStorage.setItem("level",JSON.stringify("med"))
curlvl="med" 
}
  
lvl=[...med];
//console.log(easy)
for(let i in med){
    
   // console.log(i);
    var j=Number(i)+1;
    document.querySelector(`#cell-${j}`).classList.remove("same")
    document.querySelector(`#cell-${j}`).classList.remove("wrong")
   // console.log(j);
    if(med[i]=='0')
    {document.querySelector(`#cell-${j} input`).value=""
    document.querySelector(`#cell-${j}`).classList.remove("disabled")
    document.querySelector(`#cell-${j} input`).disabled =false;
  
  }
    else{
       // console.log(document.querySelector(`#cell-${j} input`))
   document.querySelector(`#cell-${j} input`).value=med[i]
   localStorage.setItem(`med${j}`,JSON.stringify(med[i]))
 //  document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
   document.querySelector(`#cell-${j}`).classList.add("disabled")
   document.querySelector(`#cell-${j} input`).disabled =true;
}}}
function localmed(){
  for(let i in med){
    
    // console.log(i);
     var j=Number(i)+1;
     document.querySelector(`#cell-${j}`).classList.remove("same")
    // console.log(j);
     if(med[i]=='0')
     {document.querySelector(`#cell-${j} input`).value=""
     document.querySelector(`#cell-${j}`).classList.remove("disabled")
     document.querySelector(`#cell-${j} input`).disabled =false;
   
   }
     else{
        // console.log(document.querySelector(`#cell-${j} input`))
    document.querySelector(`#cell-${j} input`).value=med[i]
    localStorage.setItem(`med${j}`,JSON.stringify(med[i]))
  //  document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
    document.querySelector(`#cell-${j}`).classList.add("disabled")
    document.querySelector(`#cell-${j} input`).disabled =true;
 }}
}
const hardlvl=[
  [0, 0, 7,9 ,3, 0, 0, 0, 8],
  [6, 8, 0, 0, 0, 5, 1, 9, 0],
  [0, 0, 5, 6, 0, 0, 0, 0, 2],
  [0, 0, 0, 4, 0, 0, 0, 8, 0],
  [5, 9, 0, 1, 2, 6, 0, 3, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 9],
  [0, 7, 1, 3, 5, 4, 0, 2, 0],
  [0, 0, 9, 7, 0, 0, 0, 5, 1],
  [0, 0, 0, 0, 1, 0, 0, 7, 0]
]
var hard=[]
for(i in hardlvl){
 // console.log(easylvl[i])
   hard=[...hard,...hardlvl[i]]
}
function setuphard(){
  document.getElementById("no").classList.remove("hide")
  document.getElementsByClassName("buttonflex2")[0].setAttribute("id","buttons2")
  document.getElementsByClassName("buttonflex2")[0].classList.remove("hide")
  document.getElementsByClassName("button3")[0].classList.add("hide")
  for(let i=1;i<=81;i++){
    document.querySelector(`#cell-${i} input`).removeAttribute("type")
document.querySelector(`#cell-${i} input`).setAttribute("type","number")
localStorage.setItem("level",JSON.stringify("hard"))
curlvl="hard" 
}
  
lvl=[...hard];
//console.log(easy)
for(let i in hard){
    
   // console.log(i);
    var j=Number(i)+1;
    document.querySelector(`#cell-${j}`).classList.remove("same")
    document.querySelector(`#cell-${j}`).classList.remove("wrong")
   // console.log(j);
    if(hard[i]=='0')
    {document.querySelector(`#cell-${j} input`).value=""
    document.querySelector(`#cell-${j}`).classList.remove("disabled")
    document.querySelector(`#cell-${j} input`).disabled =false;
  
  }
    else{
       // console.log(document.querySelector(`#cell-${j} input`))
   document.querySelector(`#cell-${j} input`).value=hard[i]
   localStorage.setItem(`hard${j}`,JSON.stringify(hard[i]))
 //  document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
   document.querySelector(`#cell-${j}`).classList.add("disabled")
   document.querySelector(`#cell-${j} input`).disabled =true;
}}}
function localhard(){
  for(let i in hard){
    
    // console.log(i);
     var j=Number(i)+1;
     document.querySelector(`#cell-${j}`).classList.remove("same")
    // console.log(j);
     if(hard[i]=='0')
     {document.querySelector(`#cell-${j} input`).value=""
     document.querySelector(`#cell-${j}`).classList.remove("disabled")
     document.querySelector(`#cell-${j} input`).disabled =false;
   
   }
     else{
        // console.log(document.querySelector(`#cell-${j} input`))
    document.querySelector(`#cell-${j} input`).value=hard[i]
    localStorage.setItem(`hard${j}`,JSON.stringify(hard[i]))
  //  document.querySelector(`#cell-${j} input`).setAttribute("name","disable")
    document.querySelector(`#cell-${j}`).classList.add("disabled")
    document.querySelector(`#cell-${j} input`).disabled =true;
 }}
}
function continuee(){
  document.getElementById("no").classList.add("hide")
  document.getElementsByClassName("buttonflex2")[0].setAttribute("id","buttons2")
  document.getElementsByClassName("buttonflex2")[0].classList.remove("hide")
  document.getElementsByClassName("button3")[0].classList.add("hide")
  curlvl=JSON.parse(localStorage.getItem(`level`))
  if(curlvl=="easy"){
    localeasy()
  }
  else if(curlvl=="med"){
    localmed()
  }
  else if(curlvl=="hard"){
    localhard()
  }
  // 
   for(let i=1;i<=81;i++)
   {console.log(JSON.parse(localStorage.getItem(`${curlvl}${i}`)))
   console.log(curlvl)
   let storagevalue=JSON.parse(localStorage.getItem(`${curlvl}${i}`))
   if(storagevalue!=0&&storagevalue!="-1")
   document.querySelector(`#cell-${i} input`).value=storagevalue;
}}
function no(){
  for(let i=1;i<=81;i++){
    localStorage.removeItem(`${curlvl}${i}`)
  }
  document.getElementById("no").classList.add("hide")
}

for(let i=1;i<=81;i++)
{document.querySelector(`#cell-${i} input`).addEventListener("keyup",()=>{validate(i)})
document.querySelector(`#cell-${i} input`).addEventListener("focus",()=>{validate(i)})

//document.querySelector(`#cell-${i} input`).setAttribute("max","9")
//document.querySelector(`#cell-${i} input`).addEventListener("blur",()=>{removesame(i)})
document.querySelector(`#cell-${i} input`).addEventListener("focus",()=>{rowGlow(Math.floor((i-1)/9)+1)})
document.querySelector(`#cell-${i} input`).addEventListener("focus",()=>{columnGlow(Math.floor((i-1)%9)+1)})
document.querySelector(`#cell-${i} input`).addEventListener("focus",()=>{groupGlow(Math.floor(((i-1)%9)/3)+1+3*Math.floor((i-1)/27))})
}