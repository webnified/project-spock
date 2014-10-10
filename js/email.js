function sendEmail ( data , attachments ) {							
		var attachments = {
					type: 'application/pdf',
					name: 'Service Contract',
					content: pdf
			};

			var emailData = generateEmail ({
				email: 'spoonandpepper@gmail.com',
				fullname: 'To The Staff',
				message: data.data.message
			} , 'The Order' , false);
			var customerData = generateEmail({
				email: data.email,
				fullname: data.fullname,
				message: data.data.message
			}, 'To Our Fellow Customer' , attachments);

		$.ajax(emailData);
		$.ajax(customerData);
}

function generateEmail ( data , subject , attachments ) {
	var attach = [];
	if (attachments) attach.push(attachments);

	return {
				type: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				data: {
					key: 'xjEl0HBJZFdoaSg3scS1ew',
					message: {
						from_email: 'support@spoonandpepper.com',
						from_name: 'Support Spoon&Pepper',
						to: [
							{
								email: data.email,
								name: data.fullname,
								type: 'to'
							}
						],						
						auto_text: 'true',
						subject: subject,
						text: data.message,
						attachments: attach
					}
				},
				success: function ( response ) {
					console.log(response);
					alert('Email has been sent !!!');
				},
				error: function ( response ) {
					alert('Email has failed to sent !!!');
				}
			}
}