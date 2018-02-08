import React from 'react';
import ReactDOM from 'react-dom';
import {
	Link,
	Route,
	HashRouter,
} from 'react-router-dom';
// I18N
import {I18nextProvider} from 'react-i18next';
import i18n from '../lib/i18n';
// Views
import View2 from './View2.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sample: 'world',
		};

		this.changeLanguage=this.changeLanguage.bind(this);

		this.Home = () => (
			<View2 />
		);
	}

	componentDidMount() {
		// let self=this;
	}

	changeLanguage(lng) {
		i18n.changeLanguage(lng);
	};

	render() {
		return (
			<I18nextProvider i18n={ i18n }>
				<HashRouter>
					<div>
						<div id="content">
							<Route exact={true} path="/" component={this.Home} />
						</div>
					</div>
				</HashRouter>
			</I18nextProvider>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('content'));
