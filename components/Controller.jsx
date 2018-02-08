import React from 'react';

export const Controller = ({
	mouseDown,
	mouseMove,
	mouseUp,
	x,
	y,
	style,
	readOnly=false,
	disabled=false,
	mode,
}) =>
	<svg xmlns="http://www.w3.org/2000/svg" className="controller" style={style} viewBox="0 0 500 500">
		<defs>
			<g id="aidLineHor">
				<line id="aidLineHor" stroke={'black'} x1="0" y1="-250" x2="0" y2="250" strokeLinecap="round" strokeWidth="1" />
			</g>
			<g id="aidLineVer">
				<line x1="-250" y1="0" x2="250" y2="0" stroke={'black'} strokeLinecap="round" strokeWidth="1" />
			</g>
		</defs>
		<g transform="translate(250, 250)">
			<use x="0" y="0" href="#aidLineVer" />
			<use x="0" y="0" href="#aidLineHor" />
			<text fill='black' x="200" y="200" textAnchor="middle" fontSize="20" >
				{disabled?'disabled':readOnly?'read only':null}
			</text>
			<use x="0" y="125" href="#aidLineVer" />
			<use x="-125" y="0" href="#aidLineHor" />
			{mode=='4axis'&&
				<line x1={-100} y1={0} x2={100} y2={0} stroke="#444444" strokeLinecap="round" strokeWidth="56" />
			}
			{mode=='4axis'&&
				<line x1={0} y1={-100} x2={0} y2={100} stroke="#444444" strokeLinecap="round" strokeWidth="56" />
			}
			{mode=='freeaxis'&&
				<rect fill='#444444' x={-125} y={-125} width="250" height="250" rx="20" ry="20" />
			}
			<line x1={disabled?0:x/2} y1={disabled?0:y/2} x2={disabled?0:x} y2={disabled?0:y} stroke="lightGray" strokeLinecap="round" strokeWidth="50" />
			<circle className={'outer'+(disabled?' disabled':'')} cx={disabled?0:x} cy={disabled?0:y} r="46.92"/>
			<circle className={'inner'+(disabled?' disabled':'')} cx={disabled?0:x*1.1} cy={disabled?0:y*1.1} r="18"/>
		</g>
		<rect
			className="btn"
			x="0"
			y="0"
			width="500"
			height="500"
			onTouchMove={disabled||readOnly?null:mouseMove}
			onTouchStart={disabled||readOnly?null:mouseDown}
			onTouchEnd={disabled||readOnly?null:mouseUp}
			onMouseMove={disabled||readOnly?null:mouseMove}
			onMouseUp={disabled||readOnly?null:mouseUp}
			onMouseDown={disabled||readOnly?null:mouseDown}
			onMouseLeave={disabled||readOnly?null:mouseUp}
		/>
	</svg>;
