var Posts = React.createClass({
  	render: function() {
  		var usersPosts = this.props.allPosts;
  		var postsToDisplay = usersPosts.map(function(post){
	  		return(
	  			<div key={post.cid} className="results-box">
					{post.body}
				</div>
			);
		});
		return (<div>{postsToDisplay}</div>)
  	}
});
