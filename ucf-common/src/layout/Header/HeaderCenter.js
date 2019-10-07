import React,{Component} from "react";
import cookie from "react-cookie";
// import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';
import {getContextId} from 'utils';
const contextId = getContextId();
class HeaderCenter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      let {themeObj} = this.props;
      // let bgImg = `url(${themeObj.headerCenterImg})`
      let bgImg = `url(${themeObj.headerCenterImg})`
      let className = 'portal-logo';
      if(contextId === 'mdm'){
        bgImg = `url("images/index/logo_mdm.svg")`
        className = 'portal-logo portal-logomdm';
      }
      console.log("contextId:"+contextId);
      console.log(themeObj.headerCenterImg);
        return (
            <div className="header-center">
              <a href="javascript:;">
                {/* <div className={className} style={{backgroundImage:bgImg ,height:'40px',backgroundRepeat:'no-repeat'}}></div> */}
                <img src={themeObj.headerCenterImg } className="portal-logo" />
              </a>
            </div>
        );
    }
}
export default HeaderCenter;
