import React from "react";

const newButton = ({ onUpdate }) => {
	return (
		<div className="sortable-column-add" onClick={onUpdate}>
			<span className="plus" />
		</div>
	);
};

export default newButton;
