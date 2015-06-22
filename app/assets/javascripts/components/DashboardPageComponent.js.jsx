var Dashboard = React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	render: function() {
		return (
			<div className="dashboard-page">


				<button className="logout-btn" onClick={this.logOut}>
                   <strong>Log Out</strong>
                </button>


	  			<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>

	  			<h2>Post Stuff!</h2>
	  			
				<div className="post-box">
					<Posts allPosts={this.state.data} />
					// posts go here........

				</div>

	  			<h2>Start a conversation with your classmates!</h2>


				<div className='post-box'>

					<div className="type-post">
					<input type='text' ref='write-post' className='input-box' placeholder='Type your post here' />

						<button className="submit-btn" onClick={this.findClassmate}>
	  						<strong>Submit</strong>
	  					</button>

					</div>

	  				<div className="posted-post">
					<input type='text' ref='posted-text' className='input-box' placeholder='See your post here' />
					</div>

					<div className="post-comments">
					<input type='text' ref='comment-text' className='input-box' placeholder='See comments from classmates' />
					</div>

	  			</div>
	  			
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	}
});

