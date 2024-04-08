const input = document.getElementById("input")
const errSpan = document.getElementById("errSpan")

const addBtn = document.getElementById("addBtn")
const clearAll = document.querySelector(".clear-all-btn")

const Lists = document.getElementById("addLists")
const count = document.querySelector(".count")

class newList {
    constructor(title) {
        this.title = title
    }
}

let productarr = []
addBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let newproduct
    if (input.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Input is Empty!",
        });

    } else {
        // errSpan.classList.remove("active")
        newproduct = new newList(input.value)
        Swal.fire({
            title: "Good job!",
            text: "To Do Added!",
            icon: "success"
        });
        productarr.push(newproduct)
        showProduct(newproduct)

    }

})



function showProduct(product) {
    Lists.innerHTML += `
    <li class="d-flex justify-content-between mb-2 myProduct">
    <span>${product.title}</span>
    <div class="btns-wrapper">
        <button class="btn btn-outline-primary mark-as-done"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
        <button class="btn btn-outline-warning edit"><i class="fa-solid fa-edit"></i></button>
    </div>
</li>
    `
    count.innerHTML = productarr.length
    input.value = ""
    const btnDeletes = document.querySelectorAll(".delete")
    btnDeletes.forEach(btnDelete => {
        btnDelete.addEventListener("click", function () {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    btnDelete.closest(".myProduct").remove()
                    if (count.innerHTML == 1) {
                        count.innerHTML = 'no'
                    }
                    else{
                        count.innerHTML = Number(count.innerHTML) - 1
                    }
                }
            });


        })
    })
    const btnMarksDone = document.querySelectorAll(".mark-as-done")
    btnMarksDone.forEach(btn => {
        btn.addEventListener("click", function () {
            if (count.innerHTML == 1 || count.innerHTML == 'no') {
                count.innerHTML = 'no'
            }
            else{
                count.innerHTML = Number(count.innerHTML) - 1
            }
        })
    })



}


    clearAll.addEventListener('click',()=>{
        if (productarr.length > 0) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to deleted all Lists!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                  Lists.innerHTML = ``
                  productarr = []
                  count.innerHTML = "no"
                }
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You No have to-do-list!",
            });
        }

    
    }) 








