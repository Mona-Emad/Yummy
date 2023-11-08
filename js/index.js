$(document).ready(function(){
  
  
  $(".lds-spinner").fadeOut(500,function(){
    $(".looding").fadeOut(500,function(){
      $(".looding").addClass("d-none");
      $("body").css("overflow","auto")
   getMainImages();
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
    })
  })





const windowUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
const categoryUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

// =======================================search=========================================================>

const continerSearchImades = document.querySelector(".serch-images");
const nameSearch = document.getElementById("nameSearch");
const firstLetterSearch = document.getElementById("letterSearch");
const searchLink = document.querySelector(".search-link");
const searchForm = document.querySelector(".search-form");

// ===============================windo element=================================================================>
const continerImades = document.getElementById("allImages");
let navKey = $(".navKey").innerWidth();
let navWidyh = $("aside").innerWidth();

let navHidden = navWidyh - navKey;
// ===============================category element=================================================================>
const categoryLink = document.querySelector(".cate-link");
const areaLink = document.querySelector(".area-link");
const ingredientsLink = document.querySelector(".ingredients-link");
// ===============================form element=================================================================>
const userName = document.getElementById("uName");
const userPhone = document.getElementById("nPhone");
const userpassword = document.getElementById("password");
const userEmail = document.getElementById("uEmail");
const userAge = document.getElementById("uAge");
const rePassword = document.getElementById("rePassword");
const cuntinerInput=document.querySelector(".form-cuntiner")
// ===============================validation=================================================================>
const btnForm=document.querySelector(".btn-form")
let userNameRegex=/^[A-Z a-z]{5,15}$/
let userPhoneRegex=/^01[0125][0-9]{8}$/
var userPasswordRegex=/^[A-Za-z0-9]{5,15}$/
let userEmailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let userAgeRegex=/^([2-7][0-9]|80)$/
const ContactLink=document.querySelector(".Contact-link")

// functions================================================================================================>
$("#closeNav").click(function () {
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
});
$("#openNav").click(function () {
  $("aside").animate({ left: 0 }, 500);
  $("#openNav").addClass("d-none");
  $("#closeNav").removeClass("d-none");
  $("ul li").addClass("animate__bounceInLeft");
});
async function getMainImages() {
  const respons = await fetch(windowUrl);
  const mainData = await respons.json();
  displayMainImages(mainData.meals);
}

// let mainImages=getMainImages()
// console.log(mainImages);

async function displayMainImages(mainImages)
{


let imagesContiner="";
for (let i= 0 ; i<mainImages.length ;i++){

    imagesContiner+=`

    <div class="imgs col-md-3 col-sm-6" >
    <div class="imag window position-relative   rounded p-0  overflow-hidden " data-index="${i}">
                    <img src="${mainImages[i].strMealThumb}" class="w-100 rounded" alt="image of  ${mainImages[i].strMeal}">
                    <div class="card-image ">
                        <h2> ${mainImages[i].strMeal.split(",")[0]}</h2>
                    </div>
                </div>
                </div>`
                continerImades.innerHTML=imagesContiner;
             let allImgs=continerImades.querySelectorAll(".window")

             displayDesc(allImgs,mainImages)

}

}

// ============descriptio function=============>

function displayDesc(imgaArray, mainImages) {
  // console.log(imgaArray);
  // console.log(mainImages);
  for (let j = 0; j < imgaArray.length; j++) {
    let imgInfoContiner = imgaArray[j].addEventListener("click", function (e) {
      let index = e.target.parentElement.dataset.index;
      console.log(mainImages[index].strIngredient11);
      if (mainImages[index].strTags==null) {
        mainImages[index].strTags=""
      }
      
      imgInfoContiner = `
                    <div class="row container py-5">
            <div class="col-md-4 rounded">
              <img src="${
                mainImages[index].strMealThumb
              }" class="w-100 rounded" alt="image of ${
        mainImages[index].strMeal
      } " />
              <h3 class="h2 text-white">${mainImages[index].strMeal}</h3>
            </div>
            <div class="col-md-8">
              <h2 class="h1 text-white">Instructions</h2>
              <p class="text-white">
              ${
                mainImages[index].strInstructions
                  ? mainImages[index].strInstructions
                  : ""
              }
              </p>
              <span class="fa-2x fw-bold text-white">
                Area:${mainImages[index].strArea}
              </span>
              <br>
              <span class="fa-2x fw-bold text-white">
                Category:${mainImages[index].strCategory}
              </span>
              <div class="d-flex flex-column">
                <span class="fa-2x fw-bold text-white">
                    Recipes:
                  </span>
                  <div class="all-span d-flex gap-3 flex-wrap">

                      <span class="span rounded ">
                      ${mainImages[index].strMeasure1 ? mainImages[index].strMeasure1 :""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strMeasure2 ?mainImages[index].strMeasure2:""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strMeasure3?mainImages[index].strMeasure3:""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strMeasure4 ? mainImages[index].strMeasure4:"" }
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strMeasure5 ? mainImages[index].strMeasure5 : ""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strMeasure6 ? mainImages[index].strMeasure6 : ""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strIngredient7 ? mainImages[index].strIngredient7 : ""}
                      </span>
                      <span class="span rounded  ">
                        ${mainImages[index].strIngredient8 ? mainImages[index].strIngredient8 : ""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strIngredient9 ? mainImages[index].strIngredient9 : ""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strIngredient10 ? mainImages[index].strIngredient10 : ""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strIngredient11 ? mainImages[index].strIngredient11 :""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strIngredient12 ? mainImages[index].strIngredient12 : ""}
                      </span>
                      <span class="span rounded ">
                        ${mainImages[index].strIngredient13 ? mainImages[index].strIngredient13 : ""}
                      </span>
                  </div>
                  <span class="fa-2x fw-bold text-white my-3">
                    Tags:
                    <br>
                    <span class="bg-warning rounded me-2  my-3">
                    ${
                      mainImages[index].strTags.split(",")[0]
                        ? mainImages[index].strTags.split(",")[0]
                        : " "
                    }
                      </span>
                    <span class="bg-info rounded  my-3">
                    ${
                      mainImages[index].strTags.split(",")[1]
                        ? mainImages[index].strTags.split(",")[1]: ""
                    }
                      </span>
                  </span>
                  <div class="btn-info d-flex justify-content-start gap-2 align-items-center">
                    <a href="${
                      mainImages[index].strSource
                    }" class="btn btn-info">Sourc</a>
                    <a href="${
                      mainImages[index].strYoutube
                    }" class="btn btn-warning">Youtube</a>
                  </div>
              </div>
             
            </div>
          </div>`;
      continerImades.innerHTML = imgInfoContiner;
      scroll(0, 0);
    });
  }
}

// search api function ======>
async function searchDataName(categorySearch, foodName, search) {
  const resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${search}.php?&${categorySearch}=${foodName}`
  );
  const dataOfName = await resp.json();
  
  return dataOfName.meals;
}

async function displaySerch(categorySearch, foodName, search) {
  let searchImages = await searchDataName(categorySearch, foodName, search);

  let imagsContiner = "";
  for (let i = 0; i < searchImages.length; i++) {
    imagsContiner += `<div class="col-md-3 col-sm-6">
                   <div class="imag search position-relative  rounded  " data-index="${i}">
                    <img src="${searchImages[i].strMealThumb}" class="w-100 rounded" alt="image of  ${searchImages[i].strMeal}">
                    <div class="card-image">
                        <h2> ${searchImages[i].strMeal}</h2>
                    </div>
                </div>
                </div>`;
    continerImades.innerHTML = imagsContiner;
    let allImgs = continerImades.querySelectorAll(".imag");
    displayDesc(allImgs, searchImages);
  }
}

// catwgory api function ======>
async function getCategImages() {
  const respons = await fetch(categoryUrl);
  const mainData = await respons.json();
  return mainData.categories;
}

async function displayCategory() {
  let categData = await getCategImages();
  let imagesContiner = "";
  for (let i = 0; i < categData.length; i++) {
    imagesContiner += `
    <div class="col-md-3 col-sm-6">
    <div class="imag catag rounded bg-black" data-name="${
      categData[i].strCategory
    }">
      <img src="${
        categData[i].strCategoryThumb
      }" class="w-100 rounded" alt="image of${categData[i].strCategory}">
      <div class="card-image card-categ flex-column justify-content-center align-items-center">
      <h2 class=" h3"> ${categData[i].strCategory}</h2>
      <p class=" fs-6">${categData[i].strCategoryDescription.slice(0, 100)}</p>
      </div>

    </div>

  </div>`;
    continerImades.innerHTML = imagesContiner;
    let containerCategory = continerImades.querySelectorAll(".catag");
    for (let j = 0; j < containerCategory.length; j++) {
      containerCategory[j].addEventListener("click", function (e) {
        let categoryName = e.target.parentElement.parentElement.dataset.name;
        getUrlCateSearch(categoryName);
      });
    }
  }
}
async function getUrlCateSearch(foodName) {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`
  );
  let data = await respons.json();
  // displayMainImages(data.meals)
  displayMainImages(data.meals);
}

// displayArea========>
async function getNameCuntry(letterCateg, CuntryName) {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?${letterCateg}=${CuntryName}`
  );
  let data = await respons.json();

  return data.meals;
}

async function displayArea(letterCateg, CuntryName) {
  let areaData = await getNameCuntry(letterCateg, CuntryName);
  let areaCuntiner = "";
  for (let i = 0; i < areaData.length; i++) {
    areaCuntiner += `
    <div class=" col-md-3 col-sm-6 mb-4">
    <div class="area d-flex flex-column align-items-center justify-content-center  " data-name="${areaData[i].strArea}">
    <i class="fa-solid fa-house fa-6x"></i>
      <h3 class="fw-bold text-white">${areaData[i].strArea}</h3>
    </div>
  </div>`;
    continerImades.innerHTML = areaCuntiner;
    let allAreaContainer = continerImades.querySelectorAll(".area");

    getNameSearch(allAreaContainer);
  }
}
function getNameSearch(arry) {
  for (let i = 0; i < arry.length; i++) {
    arry[i].addEventListener("click", function (e) {
      let nameCuntry = e.target.parentElement.dataset.name;
      getUrlCateSearch(nameCuntry);
     displaySerch("a", nameCuntry, "filter");

      
    });
  }
}
async function displayIngredients() {
  let data = await getCategImages();
  let cartona = "";
  for (let i = 0; i < data.length; i++) {
    cartona += `<div class=" col-md-3 col-sm-6 mb-4">
      <div class="area d-flex flex-column align-items-center justify-content-center  " data-name="${data[i].strCategory}">

      <i class="fa-solid fa-drumstick-bite fa-6x"></i>
        <h3 class="fw-bold text-white mb-2">${data[i].strCategory}</h3>
    <p class="text-white text-center ">${data[i].strCategoryDescription.slice(0,100)}</p>
      </div>
    </div>`;
    continerImades.innerHTML = cartona;
    let allAreaContainer = continerImades.querySelectorAll(".area");

    getNameSearch(allAreaContainer);
  }
}
// validation  function =================================================>

 function deleteDesable()
{
 if(validate(userNameRegex , userName)&&validate(userPhoneRegex , userPhone)&& validate(userPasswordRegex , userpassword)&&validate(userEmailRegex , userEmail)&&validate(userAgeRegex , userAge))
{
  btnForm.removeAttribute("disabled")
}
  
}


function validate(regex , element){
    if(regex.test(element.value))
    {
      element.classList.add("is-valid")
      element.classList.remove("is-invalid")
      element.nextElementSibling.classList.replace('d-block' , "d-none")
      
      
        return true
    } else
    {
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
        element.nextElementSibling.classList.replace('d-none', "d-block")
        
        return false
    }
  
}




// add event==========>
window.addEventListener("load", () => {
  getMainImages();
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
  searchForm.classList.add("d-none");
});

// add event search==========>
nameSearch.addEventListener("input", function () {
  displaySerch("s", "m", "search")
  displaySerch("s", this.value, "search");
});
nameSearch.addEventListener("click", function () {
  displaySerch("s", "m", "search")
  
});
firstLetterSearch.addEventListener("input", function () {
  displaySerch("f", this.value);
});
searchLink.addEventListener("click", function () {
  searchForm.classList.remove("d-none");
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
  $("body").css("overflow",'auto')
  cuntinerInput.classList.replace("d-flex","d-none")

});

categoryLink.addEventListener("click", function () {
  displayCategory(categoryUrl);
  searchForm.classList.add("d-none");
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
  $("body").css("overflow",'auto')
  cuntinerInput.classList.replace("d-flex","d-none")

});
areaLink.addEventListener("click", function () {
  displayArea("a", "list");
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
  searchForm.classList.add("d-none");
  $("body").css("overflow",'auto')
  cuntinerInput.classList.replace("d-flex","d-none")

});
ingredientsLink.addEventListener("click", function () {
  // displayArea("c","list")

  displayIngredients("c", "list");
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
  searchForm.classList.add("d-none");
  $("body").css("overflow",'auto')
  cuntinerInput.classList.replace("d-flex","d-none")
  // getNameCuntry("a","Seafood")
});
ContactLink.addEventListener("click",function(){
  cuntinerInput.classList.replace("d-none","d-flex")
  $("aside").animate({ left: -navHidden }, 500);
  $("#closeNav").addClass("d-none");
  $("#openNav").removeClass("d-none");
  searchForm.classList.add("d-none");
  $("body").css("overflow",'hidden')
})
userName.addEventListener("input",function(){
  validate(userNameRegex , userName)
  userPhone.addEventListener("input",function(){
    validate(userPhoneRegex , userPhone)
    // console.log(userName.value);
    userpassword.addEventListener("input",function(){
      validate(userPasswordRegex , userpassword)
      // console.log(userName.value);
      userEmail.addEventListener("input",function(){
        validate(userEmailRegex , userEmail)
        // console.log(userName.value);
        userAge.addEventListener("input",function(){
          validate(userAgeRegex , userAge)
          // console.log(userName.value);
          rePassword.addEventListener("input",function(){
            if(userpassword.value==rePassword.value){
              rePassword.classList.add("is-valid")
              rePassword.classList.remove("is-invalid")
              rePassword.nextElementSibling.classList.replace('d-block' , "d-none")
              
              deleteDesable()
            }else
            {
              rePassword.classList.remove("is-valid")
              rePassword.classList.add("is-invalid")
              rePassword.nextElementSibling.classList.replace('d-none', "d-block")
          
            }
          })
          
          
        })
      })
    })
  })
})




})