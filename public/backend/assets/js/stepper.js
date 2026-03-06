(function () {
    window.addEventListener('load', () => {
      const errorStepper = HSStepper.getInstance('#ctc-component-error-tab-preview [data-hs-stepper]');
      let errorSuccessState = 1;

      errorStepper.on('beforeNext', (ind) => {
        if (ind === 2) {
          errorStepper.setProcessedNavItem(ind);

          setTimeout(() => {
            errorStepper.unsetProcessedNavItem(ind);
            errorStepper.enableButtons();

            if (errorSuccessState) {
              errorStepper.goToNext();
            } else {
              errorStepper.setErrorNavItem(ind);
            }

            errorSuccessState = !errorSuccessState;
          }, 2000);
        }
      });
    });
  })();