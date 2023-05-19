const observer = new MutationObserver(() => {
  const buttons = Array.from(document.querySelectorAll('button'));

  const buttonsWithText = buttons.filter(function(button) {
    return button.textContent.includes('Continue generating');
  });

  if (buttonsWithText.length > 0) {
    buttonsWithText[0].click();
  }

  const regenerateButton = buttons.filter(function(button) {
    return button.classList.contains('btn-primary') && button.textContent.includes('Regenerate response');
  })

  if (regenerateButton.length > 0) {
    regenerateButton[0].click();
  }
});

observer.observe(document.body, { childList: true, subtree: true });