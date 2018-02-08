import React from 'react';
import {translate, Trans} from 'react-i18next';
import {Controller} from '../components/Controller.jsx';

class View2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0,
			active: false,
			reseting: true,
			fouraxis: false,
			steppin: 0,
		};
		this.mouseDown=this.mouseDown.bind(this);
		this.mouseMove=this.mouseMove.bind(this);
		this.mouseUp=this.mouseUp.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		/* this.setState({
		});*/
	}
	mouseDown(evt) {
		this.setState({
			active: true,
		});
	}

	compareNumbers(num1, num2) {
		if (num1<0) {
			num1=-num1;
		}
		if (num2<0) {
			num2=-num2;
		}
		return num1>num2;
	}
	mouseMove(evt) {
		if (this.state.active===true) {
			const dim = evt.target.getBoundingClientRect();
			let clientX;
			let clientY;
			if ( evt.touches ) { // Touch "first" item
				clientX = evt.touches[0].clientX;
				clientY = evt.touches[0].clientY;
			} else {
				clientX = evt.clientX-dim.left;
				clientY = evt.clientY-dim.top;
			}
			let tempX = (clientX)*(500/dim.width);
			let tempY = (clientY)*(500/dim.height);
			this.setState({
				x: this.state.fouraxis?this.compareNumbers(tempX-250, tempY-250)?((tempX-250)/250):0:((tempX-250)/250),
				y: this.state.fouraxis?this.compareNumbers(tempY-250, tempX-250)?((tempY-250)/250):0:((tempY-250)/250),
			});
		}
	}
	mouseUp(evt) {
		const {reseting, x, y} =this.state;
		this.setState({
			x: reseting?0:x,
			y: reseting?0:y,
			active: false,
		});
	}

	handleChange(evt) {
		console.log(evt.target.value, evt.target.id);
		this.setState({
			[evt.target.id]: !this.state[evt.target.id],
		});
	}

	render() {
		const {t, i18n} = this.props;
		const {x, y, fouraxis} = this.state;
		let realX = x*250;
		let realY = y*250;
		return (
			<div className='row'>
				<div className={'col-md-4 col-sm-12'}>
					<Controller
						mouseDown={this.mouseDown}
						mouseUp={this.mouseUp}
						mouseMove={this.mouseMove}
						x={realX>200?200:realX<-200?-200:realX}
						y={realY>200?200:realY<-200?-200:realY}
						mode={fouraxis?'4axis':'freeaxis'}
					/>
				</div>
				<div className={'col-md-4 col-sm-12'}>
					<Controller
						mouseDown={this.mouseDown}
						mouseUp={this.mouseUp}
						mouseMove={this.mouseMove}
						x={realX>200?200:realX<-200?-200:realX}
						y={realY>200?200:realY<-200?-200:realY}
						readOnly={true}
						mode={fouraxis?'4axis':'freeaxis'}
					/>
				</div>
				<div className={'col-md-4 col-sm-12'}>
					<Controller
						mouseDown={this.mouseDown}
						mouseUp={this.mouseUp}
						mouseMove={this.mouseMove}
						x={realX>200?200:realX<-200?-200:realX}
						y={realY>200?200:realY<-200?-200:realY}
						disabled={true}
						mode={fouraxis?'4axis':'freeaxis'}
					/>
				</div>
				<div className={'col-md-4 col-12'}>
					Reseting:<input id='reseting' type='checkbox' checked={this.state.reseting} onChange={this.handleChange.bind(this)} style={{paddingLeft: '2rem'}}/>
					4-axis:<input id='fouraxis' type='checkbox' checked={fouraxis} onChange={this.handleChange.bind(this)} style={{paddingLeft: '2rem'}}/>
				</div>
			</div>
		);
	}
}

export default translate('translations')(View2);
