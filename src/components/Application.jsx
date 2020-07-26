import React, { useReducer } from "react";

function Application() {
	function reducer(state, action) {
		if (action === "INCREMENT") {
			return {
				...state,
				count: state.count + 1,
			};
		} else if (action === "DECREMENT") {
			return {
				...state,
				count: state.count - 1,
			};
		} else {
			return state;
		}
	}

	const [state, dispach] = useReducer(reducer, { count: 0 });
	return (
		<div className="container">
			<h1>Welcome to React Hooks</h1>
			<h2> Here</h2>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => dispach("INCREMENT")}
			>
				Add +
			</button>
			<h1>
				<span className="badge badge-pill badge-primary">{state.count}</span>
			</h1>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => dispach("DECREMENT")}
			>
				Substract -
			</button>
		</div>
	);
}

export default Application;
