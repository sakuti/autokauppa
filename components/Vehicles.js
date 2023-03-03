const ListOfVehicles = [
	{
		"model": "BMW",
		"mark": "320e",
		"year": "2022",
		"price": "52,297€",
		"image": "bmw-320e.png",
		"addons": [
			"ABS",
			"Sporttipenkit",
			"LED-ajovalot",
			"Navigointijärjestelmä"
		]
	},
	{
		"model": "BMW",
		"mark": "X5 xDrive45e",
		"year": "2022",
		"price": "98,500€",
		"image": "bmw-x5.png",
		"addons": [
			"Hybridi",
			"Neliveto",
			"Varashälytin"
		]
	},
	{
		"model": "BMW",
		"mark": "530e xDrive",
		"year": "2022",
		"price": "65,730€",
		"image": "bmw-530e.png",
		"addons": [
			"Hybridi",
			"Neliveto",
			"Active Driving Assist",
		]
	},
	{
		"model": "BMW",
		"mark": "420i",
		"year": "2022",
		"price": "79,930€",
		"image": "bmw-420i.png",
		"addons": [
			"Bensiini",
			"Digital Professional",
			"HiFi-kaiutinjärjestelmä"
		]
	},
	{
		"model": "BMW",
		"mark": "118i",
		"year": "2022",
		"price": "42,238€",
		"image": "bmw-118i.png",
		"addons": [
			"Bensiini",
			"HiFi-kaiutinjärjestelmä",
			"Kaukovaloavustin"
		]
	},
	{
		"model": "BMW",
		"mark": "840i",
		"year": "2022",
		"price": "139,900€",
		"image": "bmw-840i.png",
		"addons": [
			"Bensiini",
			"BMW Display Key",
			"Parking Assistant Plus"
		]
	}
]

const Vehicles = ({ props }) => {

	return (
		<div className="vehicles contentDivider">
			{ListOfVehicles.map((vehicle, index) => (
				<div key={index} className="vehicle">
					<img src={vehicle.image}></img>
					<div className="description">
						<h5>{vehicle.model} <a>{vehicle.mark}, {vehicle.year}</a></h5>
						<p>{vehicle.price}</p>
						<div className="addons">
							{vehicle.addons.slice(0, 3).join(" | ")}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Vehicles