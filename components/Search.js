const Search = ({ props }) => {

	return (
		<div className="search contentDivider">
			<div className="keyword">
				<input placeholder="Hae esimerkiksi: Ford Mondeo"></input>
				<button> 🔍 </button>
			</div>

			<div className="sorting">
				<div className="dropdown">
					<a>Uusin ensin</a>
				</div>
				<button> ⌵ </button>
			</div>
		</div>
	)
}

export default Search