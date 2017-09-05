/*
 * @Author: zhanghuiming
 * @Date:   2017-09-05 08:06:11
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-05 08:28:44
 */
import React from 'react'
// require('style.css');
export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.clickToChangeColor = this.clickToChangeColor.bind(this)
		this.state = {
			color: '#000'
		}
	}
	clickToChangeColor(e) {
		this.setState({
			color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
		})
	}
	render() {
		return (<div onClick={this.clickToChangeColor} style={{color: this.state.color}}>
              hello from 张三。
    </div>)
	}
}