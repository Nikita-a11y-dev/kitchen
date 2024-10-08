const telInputs = document.querySelectorAll("#tel");

telInputs.forEach((input) => {
  IMask(input, {
    mask: "+{7} (000) 000-00-00",
  });
});
