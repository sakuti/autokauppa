import { useEffect, useState } from "react";


const Navbar = ({ props }) => {
	const [colorTheme, setColorTheme] = useState(1);

	/**
	 * Switch between light and dark theme
	 * @param {number} force - Force theme to be set to 1 or 0
	 * @returns {void}
	 */
	function themeSwitch(force) {
		const targetTheme = force || +!colorTheme;

		// Update local storage value and set document root data attribute
		document.documentElement.setAttribute('data-theme', targetTheme ? 'light' : 'dark')
		localStorage.setItem('theme', targetTheme);
		
		// Update state to trigger re-render
		setColorTheme(targetTheme);

		return targetTheme;
	};


	// Check if user has set a already a them in
	// the local storage or use user's system preference
	useEffect(() => {
		if(localStorage.getItem('theme')) {
			themeSwitch(0);
		} else {
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? themeSwitch(0) : themeSwitch(1);
		}
	}, []);


	return (
		<div className="navbar main">
			<div className="navbar brand">
				<a className="bold">Auto</a>
				kauppa
			</div>

			<div className="navbar links">
				<a key={'ajoneuvot'} href="#" className="selected">Ajoneuvot</a>
				<a key={'autohuolto'} href="#">Autohuolto</a>
				<a key={'myy'} href="#">Myy ajoneuvosi</a>
				<a key={'variteema'} href="#" onClick={themeSwitch}>{colorTheme ? '🌙' : '🌞'}</a>
			</div>
		</div>
	)
}

export default Navbar