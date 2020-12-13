const form = document.forms[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    filled = true;

    const entries = [...data.entries()];
    console.log(entries);

    const values = [...data.values()];
    console.log(values);

   values.forEach(element => {
    if (element == "") {
        filled = false;
    }
   });

    if (filled) {
        Swal.fire(
            'Принято!',
            'Ваша заявка вскоре будет рассмотрена!',
            'success'
          )
    } else {
        Swal.fire(
            'Ошибка!',
            'Заполните форму!',
            'error'
          )
    }
    
  });