(() => {

  const trigger = document.querySelector('.contact-modal__trigger');
  const overlay = document.querySelector('.contact-modal__overlay');
  const dialog = document.querySelector('.contact-modal__dialog');
  const closeBtn = document.querySelector('.contact-modal__close');
  const form = document.querySelector('.contact-modal__form');
  const successMsg = document.querySelector('.contact-modal__success');
  const errorMsg = document.querySelector('.contact-modal__error');

  const openModal = () => {
    overlay.hidden = false;
    dialog.hidden = false;
  };

  const closeModal = () => {
    overlay.hidden = true;
    dialog.hidden = true;
  };

  trigger.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    successMsg.hidden = true;
    errorMsg.hidden = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successMsg.hidden = false;
        form.reset();
      } else {
        errorMsg.hidden = false;
      }

    } catch {
      errorMsg.hidden = false;
    }
  });

})();



