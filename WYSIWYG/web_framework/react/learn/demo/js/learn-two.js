/**
 * Created by wjf55 on 2016/9/9.
 */
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.comment.author}
                </h2>
                {this.props.comment.text}
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment comment = {comment} key={comment.author}></Comment>
            )
        })
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});
var CommentBox = React.createClass({
    getInitialState: function(){
        return {data: []}
    },
    loadComment:function(){
        $.ajax({
            url:this.props.url,
            type:'post',
            dataType:'json',
            success:function(data){
                this.setState({data:data});
            }.bind(this)

        })
    },
    componentDidMount:function(){
        this.loadComment();
    },
    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox url="../json/comments.json" />,
    document.getElementById('content')
)