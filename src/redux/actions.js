/*
  action creator模块 用来创建action对象的工厂函数模块
    - 同步action creator 返回值是action对象
    - 异步action creator 返回值是一个回调函数
 */

//引入发送请求的方法
import {reqLogin, reqRegister} from '../api';
import {AUTH_SUCCESS, ERR_MSG} from './action-types';

//action-type有几个值 action就有几个同步action
//同步action 注册成功
export const authSuccess = user => ({type: AUTH_SUCCESS, data: user});

//同步action 注册失败
export const errMsg = msg => ({type: ERR_MSG, data: msg});

//注册的异步action
export const register = data => {  //data是用户提交的请求参数
  //表单验证
  const {username, password, rePassword, type} = data;
  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  } else if (password !== rePassword) {
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'});
  } else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});
  }

  return dispatch => {
    //发送ajax
    reqRegister(data)
      .then(res => {
        //请求成功
        const result = res.data;  //res {header: {}, data:{响应数据}}
        if(result.code === 0) {
          //注册成功
          dispatch(authSuccess(result.data));  //result.data响应信息的用户信息
        }else {
          console.log(result.msg);
          //注册失败
          dispatch(errMsg(result.msg));
        }
      })
      .catch(err => {
        //请求失败
        dispatch(errMsg('网络不稳定，请重新试试'));
      })
  }
};

/*
  步骤
  1.actions / action-types
  2.reducers
  3.容器组件
  4.入口文件
  5.UI组件
 */