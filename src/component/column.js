import React, { Component } from "react";

export default class ColumnComponent extends Component {
	render() {
		return (
			<div className="column-divider">
				{list.map((item, index) => {
					return (
						<Col
							className={`sortable-column-item ${item.size}-size`}
							key={item.name}
						>
							<span className="sortable-column-title">{item.name}</span>
							<Icon type="settings-o" className="sortable-column-icon" />
							<span className="sortable-column-value">{item.value}</span>
							<Sparklines data={[63, 46, 73, 70, 3, 79, 84, 59, 7]} margin={20}>
								<SparklinesLine
									style={{
										strokeWidth: 2,
										stroke: "rgba(242, 243, 248, 0.45)",
										fill: "none"
									}}
								/>
								<SparklinesSpots
									size={1}
									style={{
										stroke: "#fff",
										strokeWidth: 2,
										fill: "#fff"
									}}
								/>
							</Sparklines>
						</Col>
					);
				})}
			</div>
		);
	}
}
