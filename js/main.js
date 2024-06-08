let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let productImage = document.getElementById('productImage')
let productCategory = document.getElementById('productCategory')
let productSale = document.getElementById('productSale')
let productDescription = document.getElementById('productDescription')

let AddProduct = document.getElementById('AddProduct')
let updateProduct = document.getElementById('updateProduct')
let ClearForm = document.getElementById('ClearForm')
let DeletBtn = document.querySelectorAll('.deletbtn')
let ProductList = []
let ele = 0;

// add product

AddProduct.addEventListener('click',addproducts)
function addproducts(){
    var product = {
        ProdName : productName.value,
        proimage : productImage.files[0]?.name,
        Price : productPrice.value,
        ProdCategory : productCategory.value,
        ProdSale : productSale.checked,
        ProdDesc : productDescription.value
    }
    ProductList.push(product)
    desplayProduct()
}
  function desplayProduct(){
    let temp =''
    for (let i = 0; i < ProductList.length; i++) {
        temp+= `<tr>
        <td>${ProductList[i].ProdName}</td>
        <td class="w-25"><img src="images/${ProductList[i].proimage}" class="w-25" alt=""></td>
        <td>${ProductList[i].Price}</td>
        <td>${ProductList[i].ProdCategory}</td>
        <td>${ProductList[i].ProdSale}</td>
        <td>${ProductList[i].ProdDesc}</td>
        <td><button class="btn btn-outline-warning" onclick="Update(${i})">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deletproduct(${i})">Delete</button></td>
      </tr> `
        
    }
    document.getElementById('myData').innerHTML = temp
}
ClearForm.addEventListener('click', clearAll)
function clearAll(){
    productName.value =''
    productPrice.value = ''
    productCategory.value = ''
    productSale.checked = false
    productDescription.value = ''
}
function deletproduct(id){
    ProductList.splice(id,1)
    desplayProduct()

}

function Update(ele){
    updateProduct.classList.add('d-inline-block')
    productName.value = ProductList[ele].ProdName
    productImage.files[0].name = ProductList[ele].proimage
  productPrice.value = ProductList[ele].Price
  productCategory.value = ProductList[ele].ProdCategory
productSale.checked = ProductList[ele].ProdSale
productDescription.value = ProductList[ele].ProdDesc
}
function insertUpdate(ele){
    ProductList.splice(ele,1)
    var product = {
        ProdName : productName.value,
        proimage : productImage.files[0]?.name,
        Price : productPrice.value,
        ProdCategory : productCategory.value,
        ProdSale : productSale.checked,
        ProdDesc : productDescription.value
    }
    ProductList.push(product)
    desplayProduct()
}

