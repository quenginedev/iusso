export default `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Verify Email</title>
</head>

<body>
	<h1>Iusso logo</h1>
	<div class="card">
		<h2>
			Hi {{name}},
		</h2>
		<p>
			We just need to verify your email address before you can access <a href="https://iusso.com/verify/{{verificationCode}}">Iusso</a>.
		</p>

		<p>
			Verify your email address using this <a href="localhost:3000/verify/{{verificationCode}}" target="_blank">link</a>
		</p>

		<p class="caption">
			Thanks! – The Iusso team
		</p>
	</div>
</body>
<style>
	* {
		margin: 0;
		padding: 0;
		color: #333;
		font-weight: 500;
		font-size: 16px;
		line-height: 1.7;
	}

	body {
		height: 100vh;
		background: #eee;
		padding: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: #22c55e;
		margin-bottom: 10px;
		text-align: center;
		font-size: 32px;
	}

	h2 {
		font-size: 20px;
		margin-bottom: 10px;
	}

	.card {
		background: white;
		border-radius: 10px;
		padding: 10px;
		max-width: 420px;
		box-shadow: 0px 5px 20px #33333333;
	}

	.caption {
		margin-top: 10px;
		font-size: 12px;
	}
</style>

</html>
`