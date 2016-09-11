/**
 * Created by wjf55 on 2016/9/10.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var SerchBar = React.createClass({
    handleChange:function(){
        this.props.onUserInput(this.refs.filterTextInput.value);
    },
    render:function(){
        return (
            <div>
                <input type="text" placeholder="Search..." ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange} />
            </div>
        )
    }
});

var ProductItem = React.createClass({
    render:function(){
        return (
            <p>{this.props.product.name} {'$'} {this.props.product.price}</p>
        )
    }
});

var ProductList = React.createClass({

    render:function() {
        var rows = [];
        this.props.productList.forEach(function (product) {
            if(product.name.toLocaleLowerCase().indexOf(this.props.filterText.toLocaleLowerCase())>-1){
                rows.push(<ProductItem product={product} key={product.name}/>)
            }


        }.bind(this))
        return (
            <div>{rows}</div>
        )
    }
});
var ViewWrap = React.createClass({
    getInitialState: function(){
        return {
            filterText: '',
        };
    },
    handleUserInput:function(filterText){
        this.setState({
            filterText: filterText
        });
    },
    render:function(){
        return (
            <section>
                <SerchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}></SerchBar>
                <ProductList filterText={this.state.filterText} productList={this.props.list}></ProductList>
            </section>
        )
    }
})

var productDate = [
    {name:'你',price:'66',isShow:true},
    {name:'Baseball',price:'99',isShow:true},
    {name:'Backetball',price:'55',isShow:true},
    {name:'Ipod',price:'66',isShow:false},
    {name:'Iphone',price:'99',isShow:false},
]

ReactDOM.render(
    <ViewWrap list={productDate} />,
    document.getElementById('listWrap')
)