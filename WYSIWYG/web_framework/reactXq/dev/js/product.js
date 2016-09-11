import '../css/product.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import './zepto.js';

var ProductModule = () => {
    let ProductLi = React.createClass({
        render: function(){
            return (
                <li>
                    <div className="view-img">
                        <img src={this.props.product.imgUrl} alt=""/>
                    </div>
                    <div className="view-msg">
                        <p>
                            {this.props.product.title}
                        </p>
                    </div>
                </li>
            )
        }
    });

    let ProductUl = React.createClass({
        ajaxSign:{
            isLast:false,
            isLoad:false,
        },
        ajaxComm :function(url,callback){
            $.ajax({
                url:url,
                type:'post',
                dataType:'json',
                success:(rs) => callback && callback(rs)
            })
        },
        getInitialState: function() {
            return {
                products:[]
            };
        },
        handleScroll: function(){
            if(document.body.scrollTop+document.documentElement.clientHeight+100 > document.body.scrollHeight){
                if(this.ajaxSign.isLast || this.ajaxSign.isLoad){
                    return false
                }
                this.ajaxSign.isLoad = true;
                this.ajaxComm('/WebTry/WYSIWYG/web_framework/reactXq/dev/data/product2.json',(rs)=>{
                    if(rs.data.products.length < 20){
                        this.ajaxSign.isLast = true;
                    }
                    this.setState({
                        products:this.state.products.concat(rs.data.products)
                    });
                })
            }
        },
        componentWillMount: function(){
            this.ajaxSign.isLoad = true;
            this.ajaxComm(this.props.ajaxurl,(rs)=>{
                this.setState({
                    products:this.state.products.concat(rs.data.products)
                });
            })
        },
        componentDidMount: function(){
            this.ajaxSign.isLoad = false;
            if(!this.ajaxSign.isLast && !this.ajaxSign.isLoad){
                window.addEventListener('scroll', this.handleScroll);
            }else{
                window.removeEventListener('scroll', this.handleScroll);
            }

        },
        componentDidUpdate: function(){
            this.ajaxSign.isLoad = false;
        },
        render: function(){
            let items = [];
            this.state.products.forEach(function(product){
                items.push(<ProductLi product={product} key={product.id}></ProductLi>)
            }.bind(this))
            return (
                <ul>{items}</ul>
            )
        }
    });
    let ProductList = React.createClass({
        render: function() {
            return (
                <section className="list-two-module">
                    <ProductUl ajaxurl={this.props.ajaxurl}></ProductUl>
                </section>
            );
        }
    });
    let url = '/WebTry/WYSIWYG/web_framework/reactXq/dev/data/product.json'
    ReactDOM.render(
        <ProductList ajaxurl={url} />,
        document.getElementById('listWrap')
    );
}
export {ProductModule}

