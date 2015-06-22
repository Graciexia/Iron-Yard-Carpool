
var Signup = React.createClass({
	render: function() {
		return (
			<div className='Signup-page'>


				<button className="home-btn" onClick={this.gotoWelcome}>
                   <strong>Home</strong>
                </button>

				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>
				<h2>We need your information!</h2>
				<div className='form'>
					<form className='Signup-form' onSubmit={this.submitSignup}>
						<label className='form-label'>Username</label><br/>
						<input type='text' ref='signupUsername' className='input-box' placeholder='Enter your username' /><br/>

						<label className='form-label'>Password</label><br/>
						<input type='password' ref='signupPassword' className='input-box' placeholder='Enter your password' /><br/>

						<label className='form-label'>Confirm password</label><br/>
						<input type='password' ref='signupPasswordConfirm' className='input-box' placeholder='Confirm your password' /><br/>

						<label className='form-label'>Email</label><br/>
						<input type='email' ref='signupEmail' className='input-box' placeholder='Enter your email' /><br/>

						<label className='form-label'>Phone number</label><br/>
						<input type='text' ref='signupPhone' className='input-box' placeholder='Enter your phone number' /><br/>

						<label className='form-label'>Address</label><br/>
						<input type='text' ref='signupAddress' className='input-box' placeholder='3601 S Congress Ave, Austin, TX' /><br/>

						<label className='form-label'>Zip Code</label><br/>
						<input type='text' ref='signupZip' className='input-box' placeholder='78704' /><br/>

						<div className='error-msg' ref='error'></div><br/>
						<button type='submit' ref='signupSubmit' className='submit-btn'><strong>Submit</strong></button><br/>
					</form>
				</div>
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	},
	gotoWelcome: function(e) {
		e.preventDefault();
		app.navigate('', {trigger: true});
	},
	submitSignup: function(e) {
		e.preventDefault();
		var username = this.refs.signupUsername.getDOMNode().value;
		var password = this.refs.signupPassword.getDOMNode().value;
		var password_confirmation = this.refs.signupPasswordConfirm.getDOMNode().value;
		var email = this.refs.signupEmail.getDOMNode().value;
		var phone = this.refs.signupPhone.getDOMNode().value;
		var zip = this.refs.signupAddress.getDOMNode().value;
		var address = this.refs.signupZip.getDOMNode().value;
		var error = this.refs.error.getDOMNode();

		var user = new UserModel({
			username: username,
			password: password,
			password_confirmation: password_confirmation,
			email: email,
			phone_number: phone,
			zip_code: zip,
			address: address
		});
		var existedUser = false;
		$.ajax({
			url: 'https://calm-thicket-5529.herokuapp.com/users',
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				for(var i=0; i<data.length; i++) {
					if(username == data[i].username) {
						existedUser = true;
						break;
					}
				}
				if(existedUser === true) {
					error.innerHTML = 'Please choose another username';
				} else if(!user.isValid()) {
					error.innerHTML = user.validationError;
				} else {
					var newUser = user.attributes;
					$.ajax({
						url: 'https://calm-thicket-5529.herokuapp.com/users',
						dataType: 'json',
						type: 'POST',
						data: newUser
					});
					app.navigate('/search/zipcode/', {trigger: true});
				}
			}
		});
	}
});

