$(function() {
    var form = $('#contact-form'),
        formMessages = $('#contact-form__messages');

	$(form).submit(function(event) {
        event.preventDefault();

    	var formData = $(form).serialize();

    	$.ajax({
    	    type: 'POST',
    	    url: $(form).attr('action'),
    	    data: formData
    	}).done(function(response) {
            $(formMessages).text(response);
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Ups! Coś poszło nie tak. Wiadomość nie została wysłana');
            }
        });
    });
});