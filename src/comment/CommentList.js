import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component{
    static propTypes = {
        comments:PropTypes.array,
        onDeleteComment:PropTypes.func
    }
    
    static defaultProps = {
        comments:[]
    }

    constructor(props){
        super(props);
        this.state = {
            comments:props.comments || []
        }
    }

    handleDeleteComment(index){
        
        if(this.props.onDeleteComment){       
            this.props.onDeleteComment(index);
        }
    }

    render(){
        return (
            <div>
                {this.state.comments.map((comment,index) => 
                      <Comment 
                            comment={comment} 
                            key={index} 
                            index={index}
                            onDeleteComment={this.handleDeleteComment.bind(this)} 
                        />
                )}
            </div>
        )
    }
}

export default CommentList