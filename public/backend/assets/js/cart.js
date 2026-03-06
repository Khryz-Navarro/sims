
(function () {
    "use strict"
    // for cart items delete
    document.querySelectorAll(".btn-delete").forEach((element) => {
        let i = document.querySelectorAll(".btn-delete").length

        element.onclick = () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    element.parentElement.parentElement.parentElement.parentElement.remove()
                    i = document.querySelectorAll(".btn-delete").length
                    if (i < 1) {
                        document.getElementById("cart-container-delete").remove()
                        document.getElementById("cart-empty-cart").classList.remove("!hidden")
                    }
                }
            })
        }
    })

})();