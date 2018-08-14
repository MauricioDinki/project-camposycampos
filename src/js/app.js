$('form[name="camposycampos-contact-form"]').validate({
  name: 'required',
  email: 'required',
  phone: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre.",
   email: "Por favor, introduce un Correo Electrónico.",
   phone: "Por favor, introduce tu Teléfono."
  },
  submitHandler: function(form) {
   var data = $('form[name="camposycampos-contact-form"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/camposycampos/contact/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Correo enviado, gracias por contactarte con nosotros.");
       $('form[name="camposycampos-contact-form"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});
