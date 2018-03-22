import ThemeSwitch from '../components/ThemeSwitch';
import { connect } from 'react-redux';

// 这里导出的ThemeSwitch 就是一个Smart组件了 
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({
        type: 'CHANGE_COLOR',
        themeColor: color
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch);

