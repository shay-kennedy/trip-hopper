import React from 'react'


const Landing = () => {
	return (
		<div id="landing">
			<h1>Trip Hopper</h1>
			<p>A trip planning app.</p>
			<a href="/auth/google"><input className="login" type="button" value="Login" /></a>
		</div>
	)
}

export default Landing