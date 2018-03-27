import React,{ Component } from 'react'

class Index extends Component{
    constructor(props){
        super(props);
        // props中挂载了路由信息 即{match,location,history}
        const {match,location,history} = props;
        console.log('match',match);
        console.log('location',location);
        console.log('history',history);
        this.state = {
            ...match,
            location,
            history
        }
    }

    render(){
        return (
            <div>
                <ul>
                    <li>路由中的参数为：{this.state.params.id}</li>
                    <li>路由路径为：{this.state.path}</li>
                    <li>路由地址为：{this.state.url}</li>
                </ul>
            </div>   
        )
    }

}

export default Index;
/**
 *  react-router 在V4之后改动比较大，容易采坑
 * 
 * 
 */