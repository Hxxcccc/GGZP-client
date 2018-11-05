//Logo组件

import React, {Component} from 'react';

//引入图片
import logo from './logo.png';
//引入样式
import './index.less';

class Logo extends Component {
  render () {
    return (
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;