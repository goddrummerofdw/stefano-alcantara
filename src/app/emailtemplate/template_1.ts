export const emailTemplate =
	`<!DOCTYPE html>
	<html lang="en">
	<style>
		* {
			box-sizing: border-box;
		}
		body {
			background-color: white;
			margin: 0;
			padding: 0;
			background-color: lightgray;
		}
	</style>	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>New Customer Email</title>
	</head>
	<body>
		<section style="display: flex; width: 100%; height: auto; justify-content: center;">
			<div style="width: 80%; background-color: #ffff; padding: 1em; margin: 2em; border-radius: 1%;">
				<div style="display: flex; width: 100%; background-color: black;">
					<img style="width:20%; height:auto;"
						src="{{logoUrl}}"
						alt="stefano-logo" />
				</div>	
				<div
					style="font-family:Verdana, Geneva, sans-serif;font-size:16px;line-height:180%;text-align:center;text-align: left; padding: 1em;">
					<h1 style=" text-align: left; text-decoration: underline; font-size: 20px;">NEW CUSTOMER</h1>
					<p style="margin: 0; word-break: break-word; text-align: left;"><span style="font-weight: bolder;">First
							Name:</span> {{firstName}}</p>
					<p style="margin: 0; word-break: break-word; text-align: left;"> <span style="font-weight: bolder;">Last
							Name:</span> {{lastName}} </p>
					<p style="margin: 0; word-break: break-word; text-align: left;"><span
							style="font-weight: bolder;">Phone: </span> {{phone}}</p>
					<p style="margin: 0; word-break: break-word; text-align: left;"><span
							style="font-weight: bolder;text-decoration: none;  ">Email:</span> {{email}}</p>
					<p style="margin: 0; word-break: break-word; text-align: left;"> <span
							style="font-weight: bolder;">Message:</span> {{message}}</p>
				</div>
			</div>
		</section>
	</body>
	</html>`



