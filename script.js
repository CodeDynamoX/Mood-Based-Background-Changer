const radios = document.querySelectorAll('input[name="mood"]');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    switch (radio.value) {
      case 'happy':
        document.body.style.background = '#fff176';
        break;
      case 'sad':
        document.body.style.background = '#90caf9';
        break;
      case 'excited':
        document.body.style.background = '#ff8a65';
        break;
      case 'calm':
        document.body.style.background = '#a5d6a7';
        break;
    }
  });
});
