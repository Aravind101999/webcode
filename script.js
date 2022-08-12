document. addEventListener ("DOMContentLoaded", () =>{
var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text") ;
input.setAttribute("id","books");

var button=document.createElement("button");
button.setAttribute ("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);
let name=document.createElement("div");
name.setAttribute("id","name");

let isbn=document.createElement("div");
isbn.setAttribute("id","isbn");

let pages=document.createElement("div");
pages.setAttribute("id","pages");

let au=document.createElement("div");
au.setAttribute("id","au");

let pub=document.createElement("div");
pub.setAttribute("id","pub");

let rel=document.createElement("div");
rel.setAttribute("id","rel");

let char1=document.createElement("div");
char1.setAttribute("id","char1");

let char2=document.createElement("div");
char2.setAttribute("id","char2");

let char3=document.createElement("div");
char3.setAttribute("id","char3");

let char4=document.createElement("div");
char4.setAttribute("id","char4");

let char5=document.createElement("div");
char5.setAttribute("id","char5");





div.append (input,button,name,isbn,pages,au,pub,rel,char1,char2,char3,char4,char5);
document.body.append(div);

async function foo(){
    
let res=document.getElementById("books").value;
var url=`https://anapioficeandfire.com/api/books/${res}`;
try{
let result=await fetch(url);
let result1=await result.json();

console.log(result1.name);
name.innerHTML= `Book name :${result1.name}`;
isbn.innerHTML= `isbn:${result1.isbn}`;
pages.innerHTML= `number Of Pages:${result1.numberOfPages}`;
au.innerHTML= `authors of book:${result1.authors}`;
pub.innerHTML= `publisher:${result1.publisher}`;
rel.innerHTML= `released:${result1.released}`;
char1.innerHTML= `character 1:${result1.characters[0]}`;
char2.innerHTML= `character 2:${result1.characters[1]}`;
char3.innerHTML= `character 3:${result1.characters[2]}`;
char4.innerHTML= `character 4:${result1.characters[3]}`;
char5.innerHTML= `character 5:${result1.characters[4]}`;



}
catch (error) {
    console.log(error);
    

   }


}
//try-catch
//try:is a testing block
//catch:to handle the error handling
 /// async function foo(){
 //try {
 // let res1= await fetch("https://anapioficeandfire.com/api/books/");
 // let result=await res1.json();
  //console.log(result);
  //let res2= await bar();
  //console.log(res2);
  
 //} catch (error) {
  //console.log(error);
 //}
//}

//foo();



})

