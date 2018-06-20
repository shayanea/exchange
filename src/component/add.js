import React, { Component } from "react";
import ClickOutside from "react-click-outside";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default class AddForm extends Component {
	constructor(props) {
		super();
		this.state = {
			selectedSize: ""
		};
	}

	addNewItem = () => {};

	handleChange = () => {};

	render() {
		const { selectedSize, items } = this.state;
		const { hide, status } = this.props;
		return (
			<div className={status ? "modal-popup active" : "modal-popup"}>
				<div className="backdrop" />
				<ClickOutside onClickOutside={hide}>
					<div className="modal">
						<div className="modal-header">
							<h2>درج آیتم جدید</h2>
							<span className="icon" onClick={hide} />
						</div>
						<div className="modal-body">
							<div className="form-group">
								<label>عنوان</label>
								<Select
									name="titleStatus"
									value={selectedSize}
									onChange={() => this.handleChange(0)}
									placeholder="عنوان"
									rtl={true}
									options={[
										{ value: 0, label: "EVSTC" },
										{ value: 1, label: "BOXL" },
										{ value: 2, label: "TTD" },
										{ value: 3, label: "HEAR" },
										{ value: 4, label: "ANFI" }
									]}
								/>
							</div>
							<div className="form-group">
								<label>سایز</label>
								<Select
									name="sizeStatus"
									value={selectedSize}
									onChange={() => this.handleChange(1)}
									placeholder="سایز"
									rtl={true}
									options={[
										{ value: 0, label: "کوچک" },
										{ value: 1, label: "متوسط" },
										{ value: 2, label: "بزرگ" }
									]}
								/>
							</div>
							<div className="form-group">
								<label>بازه زمانی</label>
								<Select
									name="scheduleStatus"
									value={selectedSize}
									onChange={() => this.handleChange(2)}
									placeholder="بازه زمانی"
									rtl={true}
									options={[
										{ value: 0, label: "همزمان" },
										{ value: 1, label: "ساعتی" },
										{ value: 2, label: "روزانه" }
									]}
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button className="submit" onClick={this.addNewItem}>
								ذخیره
							</button>
							<button className="default" onClick={hide}>
								بستن
							</button>
						</div>
					</div>
				</ClickOutside>
			</div>
		);
	}
}
