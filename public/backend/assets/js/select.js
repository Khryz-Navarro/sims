window.addEventListener('load', () => {
    const successBtn = document.querySelector('#trigger-success');
    const errorBtn = document.querySelector('#trigger-error');
    const clearBtn = document.querySelector('#trigger-clear');
    const validationTarget = document.querySelector('#validation-target');
  
    successBtn.addEventListener('click', () => {
      validationTarget.classList.remove('error');
      validationTarget.classList.add('success');
    });
  
    errorBtn.addEventListener('click', () => {
      validationTarget.classList.remove('success');
      validationTarget.classList.add('error');
    });
  
    clearBtn.addEventListener('click', () => {
      validationTarget.classList.remove('success', 'error');
    });
  });
  window.addEventListener('load', () => requestAnimationFrame(() => {
    const addOptionBtn = document.querySelector('#add-option');
    const addOptionsBtn = document.querySelector('#add-options');
    const removeOptionBtn = document.querySelector('#remove-option');
    const removeOptionsBtn = document.querySelector('#remove-options');
    const select = window.HSSelect.getInstance('#hs-select-with-dynamic-options');
  
    addOptionBtn.addEventListener('click', () => {
      console.log(select);
      select.addOption({
        title: "Jannete Atkinson",
        val: "4",
        options: {
          icon: `<img class="inline-block size-6 rounded-full" src="../assets/images/faces/12.jpg" alt="Jannete Atkinson" >`
        }
      });
    });
  
    addOptionsBtn.addEventListener('click', () => {
      select.addOption([
        {
          title: "Kyle Peterson",
          val: "5",
          options: {
            icon: `<img class="inline-block size-6 rounded-full" src="../assets/images/faces/13.jpg" alt="Kyle Peterson">`
          }
        },
        {
          title: "Brad Cooper",
          val: "6",
          options: {
            icon: `<img class="inline-block size-6 rounded-full" src="../assets/images/faces/14.jpg" alt="Brad Cooper">`
          }
        },
        {
          title: "Linette Johnson",
          val: "7",
          options: {
            icon: `<img class="inline-block size-6 rounded-full" src="../assets/images/faces/15.jpg" alt="Brad Cooper">`
          }
        }
      ]);
    });
  
    removeOptionBtn.addEventListener('click', () => {
      select.removeOption("4");
    });
  
    removeOptionsBtn.addEventListener('click', () => {
      select.removeOption(["5", "6", "7"]);
    });
  
  }));
  
  window.addEventListener('load', () => requestAnimationFrame(() => {
    const destroyBtn = document.querySelector('#destroy');
    const reinitBtn = document.querySelector('#reinit');
    const selectEl = document.querySelector('#hs-select-temporary');
    const selectToggleIcon = document.querySelector('#hs-select-temporary-toggle-icon');
    console.log(selectToggleIcon);
    const select = window.HSSelect.getInstance(selectEl);
  
    destroyBtn.addEventListener('click', () => {
      select.destroy();
      selectToggleIcon.style.display = 'none';
  
      reinitBtn.removeAttribute('disabled');
      destroyBtn.setAttribute('disabled', true);
    });
  
    reinitBtn.addEventListener('click', () => {
      new HSSelect(selectEl);
      selectToggleIcon.style.display = '';
  
      reinitBtn.setAttribute('disabled', true);
      destroyBtn.removeAttribute('disabled');
    });
  }));