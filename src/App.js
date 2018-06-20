import React, { Component } from "react";

import "./App.css";
import Navbar from "./component/navbar";
import AddFrom from "./component/add";
import NewButton from "./component/newButton";
import Column from "./component/column";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalStatus: false,
			items: [
				{
					name: "EVSTC",
					source: "THE TRADE DESK INC",
					size: "large",
					grow: true,
					value: 3.35
				},
				{
					name: "BOXL",
					source: "THE TRADE DESK INC",
					size: "large",
					value: 3.35,
					grow: false
				},
				{
					name: "TTD",
					source: "THE TRADE DESK INC",
					size: "large",
					value: 3.35,
					grow: true
				},
				{
					name: "HEAR",
					source: "THE TRADE DESK INC",
					size: "large",
					value: 3.35,
					grow: false
				},
				{
					name: "TTD",
					source: "THE TRADE DESK INC",
					size: "medium",
					value: 3.35,
					grow: false
				},
				{
					name: "ANFI",
					source: "THE TRADE DESK INC",
					size: "medium",
					value: 3.35,
					grow: true
				},
				{
					name: "TEST",
					source: "THE TRADE DESK INC",
					size: "small",
					value: 3.35,
					grow: false
				},
				,
				{
					name: "HEAR",
					source: "THE TRADE DESK INC",
					size: "small",
					value: 3.35,
					grow: true
				}
			]
		};
	}

	handleAdd = () => {
		const { list } = this.state;
		this.setState({
			list: [
				...list,
				{
					name: `Custom${list.length + 1}`
				}
			]
		});
	};

	handleRemove = removeIndex => {
		const { list } = this.state;
		const newList = list.filter((item, index) => index !== removeIndex);
		this.setState({
			list: newList
		});
	};

	handleChange = items => {
		this.setState({
			list: items
		});
	};

	showModal = () => this.setState({ modalStatus: true });

	hideModal = () => this.setState({ modalStatus: false });

	addNewItem = () => {
		this.state.list.push({
			name: "Shayan",
			source: "THE TRADE DESK INC",
			size: "medium",
			value: 3.35
		});
		this.setState({ list: this.state.list, modalStatus: false });
	};

	render() {
		const { items, modalStatus } = this.state;
		const largeItems = items.filter(item => item.size === "large");
		const mediumItems = items.filter(item => item.size === "medium");
		const smallItems = items.filter(item => item.size === "small");
		return (
			<main>
				<Navbar />
				<div className="container">
					<div className="column-divider large-size">
						{largeItems.map((item, index) => {
							return <Column item={item} key={index} />;
						})}
						<NewButton onUpdate={this.showModal} />
					</div>
					<div className="column-divider medium-size">
						{mediumItems.map((item, index) => {
							return <Column item={item} key={index} />;
						})}
						<NewButton onUpdate={this.showModal} />
					</div>
					<div className="column-divider small-size">
						{smallItems.map((item, index) => {
							return <Column item={item} key={index} />;
						})}
						<NewButton onUpdate={this.showModal} />
					</div>
				</div>
				<AddFrom hide={this.hideModal} status={modalStatus} list={items} />
			</main>
		);
	}
}

export default App;
