import React from "react";

import PageTitle from "../Generic/PageTitle.jsx";
import CategoryForm from "../Forms/CategoryForm.jsx";

export default class AddCategoryPage extends React.Component {

	constructor() {

		super();
		this.state = {

			pageTitleData: {
				containerId: null,
				containerClassName: null,
				pageTitleId: null,
				pageTitleClassName: "text-center",
				pageTitleText: "Προσθήκη νέας Κατηγορίας"
			}
		};
	}

	componentWillMount() {

	}

	render() {

		return (
			<div>
				<PageTitle pageTitleData = {this.state.pageTitleData} />
				<CategoryForm />
			</div>
		);
	}
}