import React, { Component } from "react";
import { Icon, Sortable, Layout, Popover, Menu, Portal, Select } from "zent";

import "zent/css/index.css";
import "./App.css";
import Navbar from "./component/navbar";

const { Row, Col } = Layout;
const { MenuItem } = Menu;
const WrappedPortal = Portal.withNonScrollable(Portal.withESCToClose(Portal));
const Option = Select.Option;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			bodyPortalVisible: false,
			purePortalVisible: false,
			list: [
				{
					name: "EVSTC",
					source: "THE TRADE DESK INC",
					size: "lg",
					value: 3.35
				},
				{
					name: "ANFI",
					source: "THE TRADE DESK INC",
					size: "md",
					value: 3.35
				},
				{
					name: "TEST",
					source: "THE TRADE DESK INC",
					size: "sm",
					value: 3.35
				},
				{
					name: "TTD",
					source: "THE TRADE DESK INC",
					size: "md",
					value: 3.35
				},
				{
					name: "HEAR",
					source: "THE TRADE DESK INC",
					size: "sm",
					value: 3.35
				},
				{
					name: "BOXL",
					source: "THE TRADE DESK INC",
					size: "lg",
					value: 3.35
				},
				{
					name: "WOW",
					source: "THE TRADE DESK INC",
					size: "md",
					value: 3.35
				},
				{
					name: "ARCB",
					source: "THE TRADE DESK INC",
					size: "lg",
					value: 3.35
				},
				{
					name: "OMER",
					source: "THE TRADE DESK INC",
					size: "sm",
					value: 3.35
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

	showBodyPortal = () => this.setState({ bodyPortalVisible: true });

	hideBodyPortal = () => this.setState({ bodyPortalVisible: false });

	addNewItem = () => {
		this.state.list.push({
			name: "Shayan",
			source: "THE TRADE DESK INC",
			size: "md",
			value: 3.35
		});
		this.setState({ list: this.state.list });
		this.hideBodyPortal();
	};

	render() {
		const { list } = this.state;
		return (
			<main>
				<Navbar />
				<div className="container">
					<Row>
						<Sortable
							className="sortable-column"
							items={list}
							animation={300}
							filterClass="sortable-column-add"
							dragClass="sortable-column-drag"
							onChange={this.handleChange}
						>
							{list.map((item, index) => {
								return (
									<Col
										className={`sortable-column-item ${item.size}-size`}
										key={item.name}
									>
										<span className="sortable-column-title">{item.name}</span>
										<Icon type="settings-o" className="sortable-column-icon" />
										<span className="sortable-column-value">{item.value}</span>
									</Col>
								);
							})}
							<Col
								span={4}
								className="sortable-column-add"
								onClick={this.showBodyPortal}
							>
								<Icon type="plus" />
							</Col>
						</Sortable>
						<WrappedPortal
							visible={this.state.bodyPortalVisible}
							onClickAway={this.hideBodyPortal}
							onClose={this.hideBodyPortal}
							className="layer"
							style={{ background: "rgba(0, 0, 0, 0.2)", zIndex: 25 }}
							useLayerForClickAway
						>
							<div className="zent-doc-portal-content modal">
								<div className="modal-header">
									<h2>درج آیتم جدید</h2>
									<Icon
										type="close"
										className="close-modal"
										onClick={this.hideBodyPortal}
									/>
								</div>
								<div className="modal-body">
									<div className="zent-form__control-group ">
										<label className="zent-form__control-label">عنوان</label>
									</div>
									<Select className="month" placeholder="عنوان" value="">
										{list.map(item => (
											<Option key={item.name} value={item.name}>
												{item.name}
											</Option>
										))}
									</Select>
									<div className="zent-form__control-group ">
										<label className="zent-form__control-label">سایز</label>
									</div>
									<Select className="month" placeholder="سایز" value="0">
										<Option value="0">کوچک</Option>
										<Option value="1">متوسط</Option>
										<Option value="2">بزرگ</Option>
									</Select>
									<div className="zent-form__control-group ">
										<label className="zent-form__control-label">
											بازه زمانی
										</label>
									</div>
									<Select className="month" placeholder="بازه زمانی" value="0">
										<Option value="0">همزمان</Option>
										<Option value="1">ساعتی</Option>
										<Option value="2">روزانه</Option>
									</Select>
								</div>
								<div className="modal-footer">
									<button onClick={this.addNewItem}>ذخیره</button>
									<button>حذف</button>
								</div>
							</div>
						</WrappedPortal>
					</Row>
				</div>
			</main>
		);
	}
}

export default App;
