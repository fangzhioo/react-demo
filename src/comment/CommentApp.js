import React,{Component} from "react";
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import wrapWithLoadData from "./wrapWithLoadData"

class CommentApp extends Component{
    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            comments :props.data // 用来存放评论的数组
        }
    }

    // componentWillMount(){
    //     // 挂载之前
    //     this._loadComments();
    // }

    // _loadComments(){
    //     // 获取本地localStorage 
    //     let comments = localStorage.getItem("comments");
    //     if(comments){
    //         comments = JSON.parse(comments);
    //         this.setState({comments})
    //     }
    // }

    // _saveComments(comments){
    //     // 存储列表
    //     localStorage.setItem("comments",JSON.stringify(comments))
    // }

    handleSubmitComment(comment){
        if(!comment) return;
        if(!comment.username) return alert("username is null !");
        if(!comment.content) return alert("content is null !");
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({comments})
        // this._saveComments(comments);
        this.props.saveData(comments);
    }

    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        // this._saveComments(comments)
        this.props.saveData(comments)
    }
    
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList 
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }

}

CommentApp = wrapWithLoadData(CommentApp, 'comments');
export default CommentApp