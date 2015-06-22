var FindCar = React.createClass({
	render: function() {

		return (
			<div className="ride-results-page">
				<div className='header-btn'>
					<button className="logout-btn" onClick={this.logOut}>
  						<strong>Log Out</strong>
  					</button>
  				</div>

				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>


				<h2>Find classmates living in your zipcode!</h2>


				<form className='search-form'>

					<label className='form-label' ref='zipCode'>Enter your ZIP Code</label><br/>
					<input type='text' ref='searchZip' className='input-box' placeholder='ZIP Code' /><br/>

	  				<button className="submit-btn" onClick={this.findClassmate}>
	  					<strong>Submit</strong>
	  				</button>
	  			</form>
	  			<div>
	  				<h2>
						You can ride with these classmates!
					</h2>
				</div>
				<div className="results-box">
					<p>Results!</p>

				</div>
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
  			</div>
		);
	},
	findClassmate: function(e) {
		e.preventDefault();
		var zip = this.refs.searchZip.getDOMNode().value;

		$.ajax({
			url: 'https://calm-thicket-5529.herokuapp.com/search/zip_code/' + zip,
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				for(var i=0; i<data.length; i++) {
					if(zip == data[i].zip_code) {
						user.innerHTML = data[i].username;
						address.innerHTML = data[i].address;
						phone.innerHTML = data[i].phone;
						email.innerHTML = data[i].email;
					}
				}
			}
		});
	},
	logOut: function() {
		app.navigate('', {trigger: true});
	}
});
