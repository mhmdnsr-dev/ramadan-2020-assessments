export const CARD_HTML = (req) => {
	console.log(req)
	return `
<div class="card mb-3">
	<div class="card-body d-flex justify-content-between flex-row">
		<div class="d-flex flex-column">
			<h3>${req.topic_title}</h3>
			<p class="text-muted mb-2">${req.topic_details}</p>
			<p class="mb-0 text-muted">
				<strong>Expected results:</strong> ${req.expected_result}
			</p>
		</div>
		<div class="d-flex flex-column text-center">
			<a class="btn btn-link">🔺</a>
			<h3>${req.votes?.ups || 0}</h3>
			<a class="btn btn-link">🔻</a>
		</div>
	</div>
	<div class="card-footer d-flex flex-row justify-content-between">
		<div>
			<span class="text-info">NEW</span>
			&bullet; added by <strong>${req.author_name}</strong> on
			<strong>${new Date(req.submit_date).toLocaleDateString()}</strong>
		</div>
		<div
			class="d-flex justify-content-center flex-column 408ml-auto mr-2"
		>
			<div class="badge badge-success">
				${req.target_level}
			</div>
		</div>
	</div>
</div>
`};


// author_email
// : 
// ""
// author_name
// : 
// ""
// expected_result
// : 
// ""
// status
// : 
// "new"
// submit_date
// : 
// "2024-10-08T06:34:39.478Z"
// target_level
// : 
// "begineer"
// topic_details
// : 
// ""
// topic_title
// : 
// ""
// update_date
// : 
// "2024-10-08T06:34:39.478Z"
// video_ref
// : 
// {link: '', date: ''}
// votes
// : 
// {ups: 0, downs: 0}
// __v
// : 
// 0
// _id
// : 
// "6704d27f866ce52694fa1d80"

export const BASE_URL = 'http://localhost:7777';
