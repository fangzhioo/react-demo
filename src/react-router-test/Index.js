import {Component} from "react";

class Index extends Component{
    constructor(props){
        super(props);
        console.log('router index',props);
    }
    render(){
        return (
            <div>Router Index</div>
        )
    }

}

export default Index;
/**
 *  react-router 在V4之后改动比较大，容易采坑
 * 
 * 
 */