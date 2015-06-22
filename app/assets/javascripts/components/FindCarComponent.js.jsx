var FindCar = React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	render: function() {
		return (
			<div className="ride-results-page">
				<div className='header-btn'>
					<button className="dashboard-btn" onClick={this.dashboard}>
  						<strong>Dashboard</strong>
  					</button>

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
					<SearchResults results={this.state.data} />
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

		var results = $.ajax({ 													
			url: 'https://calm-thicket-5529.herokuapp.com/search/zipcode/' + zip, 
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				var neighbors = [];
				for(var i=0; i<data.length; i++) {
					if(zip == data[i].zip_code) {
						neighbors.push({
							user: data[i].username,
							address: data[i].address,
							phone_number: data[i].phone,
							email: data[i].email,
						})	
					}
				}
				this.setState({data: neighbors});
			}.bind(this) 
		});		
	},
	logOut: function() {
		app.navigate('', {trigger: true});
	},
	dashboard: function() {
		app.navigate('posts', {trigger: true});
	}
});
