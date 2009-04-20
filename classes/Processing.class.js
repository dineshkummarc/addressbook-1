function Processing() {
	var self = this;
	this.root;
	
	this.construct = function(element) {
		self.root = element;
	}
	
	this.addContact = function(returnData) {
		if(returnData['errorMessage']) {
			self.writeErrors(returnData);
		} else {
			alert('ID: ' + returnData['id'] + ' added!');
			alert('data: ' + returnData['data']['zip_code']);
			
			var content;
			
			content = 	'<div class="contactWidget">';
			content += 		'<form action="#" method="post">';
			content += 			'<fieldset>';
			content += 				'<label>First Name:</label>';
			content += 				'<input type="text" name="firstName' + returnData['data']['id'] + '" id="firstName' + returnData['data']['id'] + '" value="' + returnData['data']['first_name'] + '" />';
			
			content += 				'<label>Last Name:</label>';
			content +=				'<input type="text" name="lastName' + returnData['data']['id'] + '" id="lastName' + returnData['data']['id'] + '" value="' + returnData['data']['last_name'] + '" />';
			
			content += 				'<label>Phone:</label>';
			content +=				'<div class="phone inputGroup">';
			content +=					'<input type="text" name="phone1' + returnData['data']['id'] + '" id="phone1' + returnData['data']['id'] + '" value="' + returnData['data']['phone_one'] + '" />';
			content +=					'<input type="text" name="phone2' + returnData['data']['id'] + '" id="phone2' + returnData['data']['id'] + '" value="' + returnData['data']['phone_two'] + '" />';
			content +=					'<input type="text" name="phone3' + returnData['data']['id'] + '" id="phone3' + returnData['data']['id'] + '" value="' + returnData['data']['phone_three'] + '" />';
			content +=				'</div>';
			
			content +=				'<label>Email:</label>';
			content +=				'<input type="text" name="email' + returnData['data']['id'] + '" id="email' + returnData['data']['id'] + '" value="' + returnData['data']['email'] + '" />';
			
			content +=				'<label>Company:</label>';
			content +=				'<input type="text" name="company' + returnData['data']['id'] + '" id="company' + returnData['data']['id'] + '" value="' + returnData['data']['company'] + '" />';
			
			content +=				'<label>Address:</label>';
			content +=				'<div class="address inputGroup' + returnData['data']['id'] + '" id="inputGroup' + returnData['data']['id'] + '">';
			
			content +=					'<input type="text" name="address1' + returnData['data']['id'] + '" id="address1' + returnData['data']['id'] + '" value="' + returnData['data']['address_one'] + '" />';
			content +=					'<input type="text" name="address2' + returnData['data']['id'] + '" id="address2' + returnData['data']['id'] + '" value="' + returnData['data']['address_two'] + '" />';
			content +=				'</div>';
									
			content +=				'<div class="areaInfo inputGroup">';
			content +=					'<label>City:</label>';
			content +=					'<input type="text" name="city' + returnData['data']['id'] + '" id="city' + returnData['data']['id'] + '" value="' + returnData['data']['city'] + '" />';
			
			content +=					'<label>State:</label>';
			content +=					'<select name="state" id="state">';
			content +=						'<option label="OR" title="Oregon" value="1">OR</option>';
			content +=					'</select>';
			
			content +=					'<label>Zip:</label>';
			content +=					'<input type="text" name="zipCode' + returnData['data']['id'] + '" id="zipCode' + returnData['data']['id'] + '" value="' + returnData['data']['zip_code'] + '" />';
			content +=				'</div>';
			
			content +=				'<label>Notes:</label>';
			content +=				'<textarea name="notes' + returnData['data']['id'] + '" id="notes' + returnData['data']['id'] + '">' + returnData['data']['notes'] + '</textarea>';
			
			content +=				'<button type="submit" id="updateBtn' + returnData['data']['id'] + '">Update</button>';
			content +=			'</fieldset>';
			content +=		'</form>';
			content +=	'</div>';
			
			$('#interfaceContent', self.root).append( content );
			$('.contactWidget form #updateBtn' + returnData['data']['id']).bind('submit',function(){
				alert('update widget #' + returnData['data']['id']);
				return false;
			});
		}	
	}
	
	this.edit = function(returnID, returnError) {
		if(returnError) {
			self.writeErrors(returnError);
		} else {
			//add Contact
		}
	}
	
	this.writeErrors = function(returnData) {
		//do something with the errors
		alert(returnData['errorMessage']);
	}
}