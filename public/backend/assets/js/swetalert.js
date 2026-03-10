(function () {
  "use strict";

  const onClick = (selector, handler) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener("click", handler);
    }
  };

  /* Basic Sweetalert  */
  onClick("#basic", function () {
    Swal.fire('Welcome TO Your Admin Page')
  });

  /* Sweetalert Style-1 */
  onClick("#sweetalert1", function () {
    Swal.fire(
      'The Internet ?',
      'That thing is still around ?',
      'question'
    )
  });

  /* Error Sweetalert */
  onClick("#error-sweetalert", function () {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  });

  /* Image Sweetalert */
  onClick("#image-sweetalert", function () {
    Swal.fire({
      imageUrl: '../assets/images/brand-logos/toggle-logo.png',
      // imageHeight: 40,
      imageAlt: 'Template Logo'
    })
  });

  /* Sweetalert with 3buttons */
  onClick("#sweetalert2", function () {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  });

  /* Sweetalert with animation */
  onClick("#sweetalert3", function () {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  });

  /* Sweetalert Top-End */
  onClick("#top-end", function () {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  });
  /* Sweetalert Top-Start */
  onClick("#top-start", function () {
    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  });

  /* Sweetalert Bottom-Start */
  onClick("#bottom-start", function () {
    Swal.fire({
      position: 'bottom-start',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  });

  /* Sweetalert Bottom-End */
  onClick("#bottom-end", function () {
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  });

  /*Confirm Button Sweetalert  */
  onClick("#confirm-btn", function () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5e76a6',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  });

  /*Parameters passing Sweetalert  */
  onClick("#sweetalert4", function () {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ti-btn bg-secondary text-white hover:bg-secondary focus:ring-secondary dark:focus:ring-offset-secondary',
        cancelButton: 'ti-btn bg-danger text-white hover:bg-danger focus:ring-danger dark:focus:ring-offset-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      // reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  });

  /*Parameters passing Sweetalert  */
  onClick("#customized-btn", function () {
    Swal.fire({
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#5e76a6',
      backdrop: `
        rgba(94,118,166,0.4)
      `
    })
  });

  /*Auto Close Sweetalert  */
  onClick("#timer-btn", function () {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })
  });

  /*Ajax Request Sweetalert  */
  onClick("#ajax-btn", function () {
    Swal.fire({
      title: 'Submit your username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  });

})();
