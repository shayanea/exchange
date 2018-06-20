import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

export default class ColumnComponent extends Component {
	constructor(props) {
		super();
		this.state = {
			config: false,
			randomArray: []
		};
	}

	componentDidMount() {
		let i = 0;
		while (i < 10) {
			this.state.randomArray.push(Math.floor(Math.random() * 100 + 1));
			i++;
		}
		this.setState({ randomArray: this.state.randomArray });
	}

	render() {
		const { randomArray } = this.state;
		const { item } = this.props;
		return (
			<div
				className={
					item.grow ? "sortable-column-item up" : "sortable-column-item down"
				}
			>
				<span className="sortable-column-title">{item.name}</span>
				<div className="sortable-column-icon">
					<div className="" />
				</div>
				<span className="sortable-column-value">{item.value}</span>
				<Sparklines data={randomArray} margin={20}>
					<SparklinesLine
						style={{
							strokeWidth: 1,
							stroke: item.grow ? "#55C8C1" : "#B05678",
							fill: "none"
						}}
						onMouseMove={(e, data, p) => console.log("move", e, data, p)}
					/>
					<SparklinesSpots
						size={1}
						style={{
							stroke: item.grow ? "#55C8C1" : "#B05678",
							strokeWidth: 1,
							fill: item.grow ? "#55C8C1" : "#B05678"
						}}
					/>
				</Sparklines>
			</div>
		);
	}
}
