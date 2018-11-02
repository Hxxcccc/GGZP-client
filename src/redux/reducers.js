/*
 reducers函数 根据之前的状态和action来产生新的状态
 */

import {combineReducers} from 'redux';
import {AUTH_SUCCESS, ERR_MSG} from './action-types';

//初始化状态(今后reducer函数要管理的状态)
const initUserState = {
  username: '',
  type: '',
  msg: ''
};

function user(preState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {username: action.data.username, type: action.data.type, mag: ''};
    case ERR_MSG:
      //在node和浏览器端默认对象是不能使用... , 但是react脚手架项目, babel帮我让对象能够使用...
      return {...action.data};
    default :
      return preState;
  }
}

//如何暴露 合并多个reducers函数
export default combineReducers({
  user
})

/*
最终向外暴露：{xxx: xxx(), yyy:yyy()}
*/

