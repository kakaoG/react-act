import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actActions from '@/redux/actions/act';

import '@/assets/style/index.less';

class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isAct: true,
      btnTxt: '获取验证码',
      counts: 60,
      imgUrl: ''
    }
  }

  componentDidMount() {
    console.log(actActions.name);
    this.props.dispatch(actActions.getConfigInfo(3));
  }

  render() {
    console.log(this.props.configInfo);
    const {configInfo} = this.props;
    const {isAct, btnTxt, counts, imgUrl} = this.state;

    return (
      <div id="index">
        {isAct ?
          (
            <section style={{backgroundColor: configInfo.bgColor}}>
              <article className="banner"><img src={configInfo.banner_url} alt=""/></article>
              <article className="form">
                <div className="form-item">
                  <span className="label">手机号</span>
                  <input type="text"/>
                </div>
                <div className="form-item img-code">
                  <span className="label">图形验证码</span>
                  <input type="text"/>
                  <img src={imgUrl} alt="图形"/>
                </div>
                <div className="form-item sms-code">
                  <span className="label">短信验证码</span>
                  <input className="sms-code-input" type="text"/>
                  <button style={{color: configInfo.btColor, borderColor: configInfo.btColor}}>{btnTxt}</button>
                  <span className="timer"
                        style={{color: configInfo.btColor, borderColor: configInfo.btColor}}>倒计时{counts}s</span>
                </div>
              </article>
              <footer className="btn-wrapper fadeInLeft animated">
                <button className="submit-btn" style={{backgroundColor: configInfo.btColor}}>确定</button>
              </footer>
              <div className="rule">
                <div className="rule-title">活动规则</div>
                <div className="rule-content"></div>
              </div>
            </section>
          )
          :
          (
            <section className="empty">
              活动已结束
            </section>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  configInfo: state.act
});

export default connect(mapStateToProps)(Index);