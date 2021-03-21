export default new Promise((resolve) => {
	const script = document.createElement("script");
	script.src = `https://maps.googleapis.com/maps/api/js?v=beta&key=${process.env.MapAPIKey}&libraries=places`;
	document.body.appendChild(script);
	script.onload = () => {
		resolve(script);
	};
});
