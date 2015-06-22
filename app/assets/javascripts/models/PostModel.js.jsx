var Post = Backbone.Model.extend({
	defaults: {
		id: null,
		user_id: null,
		body: null,
		created_at: null
	},
	validate: function(attr) {
		if(!attr.body) {
			return 'Please enter your post message';
		}
		return false;
	}
});
