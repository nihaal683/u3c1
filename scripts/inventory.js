// var form=document.querySelector("#form");
// var products_data=document.querySelector("#products_data");

// function display(data){
//   var parent=document.createElement("div");
//   parent.style.boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

//   var brand=document.createElement("h1");
//   brand.innerText=data.product_brand;

//   var name=document.createElement("p");
//   name.textContent=data.product_name;

//   var price=document.createElement("p");
//   price.textContent=data.product_price;

//   var image=document.createElement("img");
//   image.src=data.product_image;
 

 

// //   var obtainedMarks1=Number(data.score);

// // var td8 = document.createElement("h3");
// // if(obtainedMarks1<=3){
// //     td8.innerText="Learning";
// //     td8.style.color="red";
// // }else if(obtainedMarks1>=4 && obtainedMarks1<=7 ){
// //     td8.innerText="Achieving";
// //     td8.style.color="orange";
// // }
// // else if(obtainedMarks1>=8 && obtainedMarks1<=10 ){
// //     td8.innerText="Mastery";
// //     td8.style.color="green";
// // }


//   var btn=document.createElement("button");
//   btn.textContent="DELETE";
//   btn.addEventListener("click",function(event){
//     event.target.parentNode.remove();
//   })

//   parent.append(brand, name ,price ,image ,btn)

//   products_data.append(parent);
// }


// form.addEventListener("submit",function(event){
//   event.preventDefault();

//   var data={
//     brand:form.product_brand.value,
//     name:form.product_name.value,
//      price:form.product_price.value,
//      image:form.product_image.value,
//   }
//   display(data);
//   console.log(data);
// })


var data =JSON.parse( localStorage.getItem("data"))||[]
data.map(function(el, index){
  var div=document.createElement("div")
  var img=document.createElement("img")
  var p=document.createElement("p")
  var p1=document.createElement("p")
  var p2=document.createElement("p")
  var but=document.createElement("button")
  but.setAttribute("id", "remove_product")
  but.innerText="Remove items"
  but.addEventListener("click", function(){
      removeproduct(el,index)
  })
  img.src=el.image;
  p.innerText=el.brand;
  p1.innerText=el.name;
  p2.innerText=el.price;
  div.append(img,p,p1,p2,but)
  document.querySelector("#products_data").append(div)
})
  
function removeproduct(el, index){
    data.splice(index,1)
    window.location.reload()
    localStorage.setItem("data", JSON.stringify(data))
}