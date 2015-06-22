var SearchResults = React.createClass({
	render: function () {
		var searchResults = this.props.results;
		if(searchResults.length === 0) {
			return (<div></div>);
		} else {
			 var toDisplay = searchResults.map(function(result) {
			 	console.log(result);
				return (
					<li key={result.cid} className="results-box">
						{result.user} <br/>
						{result.email}<br/>
						{result.phone_number}<br/>
						{result.address}
					</li>
				);
			});
			return (
				<ul>
	             	{toDisplay}
	            </ul>
			);
		}
	}
});
