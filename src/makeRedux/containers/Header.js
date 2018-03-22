import Header from '../components/Header';
import { connect } from "react-redux";

// 现在 这是一个 Header 是一个Smart组件了 
// 使用高阶组件传递参数
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
 
export default connect(mapStateToProps)(Header);;