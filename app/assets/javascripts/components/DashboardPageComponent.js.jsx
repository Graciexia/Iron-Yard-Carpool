var Dashboard = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		$.ajax({
			url: 'https://calm-thicket-5529.herokuapp.com/posts',
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		})	
	},
	render: function() {
		return (
			<div className="dashboard-page">

				<button className="logout-btn" onClick={this.logOut}>
				   <strong>Log Out</strong>
				</button>

				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>

				<h2>Start a conversation with your classmates!</h2>

				<div className='post-box'>
					<form className="type-post" onSubmit={this.makePost}>
						<input type='text' ref='writePost' className='input-box' placeholder='Type your post here' />
						<button className="submit-btn">
							<strong>Submit</strong>
						</button>
					</form>

					<div className="posted-post">
						<Posts allPosts={this.state.data} />
					</div>
				</div>

				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	},
	makePost: function(e) {
		e.preventDefault();
		var createdPost = this.refs.writePost.getDOMNode().value;
		var post = new Post ({
			body: createdPost
		});
		var newPost = post.attributes;
		$.ajax({
			url: 'https://calm-thicket-5529.herokuapp.com/posts',
			dataType: 'json',
			type: 'POST',
			data: newPost
		});
	},
	logOut: function() {
		app.navigate('', {trigger: true});
	}
});

