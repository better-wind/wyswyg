require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = require('react');
var ReactDOM = require('react-dom');

var selfCleaningTimeout = {
    componentDidUpdate: function() {
        clearTimeout(this.timeoutID);
    },
    setTimeout: function() {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout.apply(null, arguments);
    }
};

var ComponentPreview = React.createClass({displayName: "ComponentPreview",
    propTypes: {
        code: React.PropTypes.string.isRequired
    },

    mixins: [selfCleaningTimeout],

    render: function() {
        return React.createElement("div", {ref: "mount"});
    },

    componentDidMount: function() {
        this.executeCode();
    },

    componentDidUpdate: function(prevProps) {
        // execute code only when the state's not being updated by switching tab
        // this avoids re-displaying the error, which comes after a certain delay
        if (this.props.code !== prevProps.code) {
            this.executeCode();
        }
    },

    compileCode: function() {
        return JSXTransformer.transform(
                '(function() {' +
                this.props.code +
                '\n})();',
            { harmony: true }
        ).code;
    },

    executeCode: function() {
        var mountNode = this.refs.mount;

        try {
            ReactDOM.unmountComponentAtNode(mountNode);
        } catch (e) { }

        try {
            var compiledCode = this.compileCode();
            ReactDOM.render(eval(compiledCode), mountNode);
        } catch (err) {

            this.setTimeout(function() {
                ReactDOM.render(
                    React.createElement("div", {className: "playgroundError"},  err.stack || err.toString()),
                    mountNode
                );
            }, 500);
        }
    }
});

var IS_MOBILE = (
    navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    );

var CodeMirrorEditor = React.createClass({displayName: "CodeMirrorEditor",
    componentDidMount: function() {
        if (IS_MOBILE) return;

        this.editor = CodeMirror.fromTextArea(this.refs.editor, {
            mode: 'javascript',
            //lineNumbers: true,
            viewportMargin: Infinity,
            lineWrapping: true,
            smartIndent: false,  // javascript mode does bad things with jsx indents
            matchBrackets: true,
            readOnly: this.props.readOnly
        });
        this.editor.on('change', this.handleChange);
    },

    componentDidUpdate: function() {
        if (this.props.readOnly) {
            this.editor.setValue(this.props.codeText);
        }
    },

    handleChange: function() {
        if (!this.props.readOnly && this.props.onChange) {
            this.props.onChange(this.editor.getValue());
        }
    },

    render: function() {
        // wrap in a div to fully contain CodeMirror
        var editor;

        if (IS_MOBILE) {
            editor = React.createElement("pre", {style: {overflow: 'scroll'}}, this.props.codeText);
        } else {
            editor = React.createElement("textarea", {ref: "editor", defaultValue: this.props.codeText});
        }

        return (
            React.createElement("div", {style: this.props.style, className: this.props.className}, 
            editor
            )
            );
    }
});

var ReactPlayground = React.createClass({displayName: "ReactPlayground",
    propTypes: {
        codeText: React.PropTypes.string.isRequired
    },

    getInitialState: function() {
        return {
            code: this.props.codeText
        };
    },

    handleCodeChange: function(code) {
        this.setState({
            code: code
        });
    },

    changeTab: function(){
        if(this.state.tab == 'preview')
            this.setState({
                tab: 'edit'
            })
        else
            this.setState({
                tab: 'preview'
            })
    },

    render: function() {

        var tabText = this.state.tab == 'preview'? 'Live Preview': 'Live Edit';
        var code = React.createElement("div", {className: "playgroundCode"}, 
            React.createElement(CodeMirrorEditor, {key: "jsx", 
            onChange: this.handleCodeChange, 
            className: "playgroundStage", 
            codeText: this.state.code})
        );

        var preview = React.createElement("div", {className: "playgroundPreview"}, 
            React.createElement(ComponentPreview, {code: this.state.code})
        )

        return (
         React.createElement("div", {className: "playground"}, 
            React.createElement("div", {className: "playgroundTab", onClick: this.changeTab}, React.createElement("span", {className: "blur"}, tabText)), 
            this.state.tab == 'preview'? code: preview
         )
      );
    }
});

for(var id=1; id<10; id++){
    var example = document.getElementById('example'+id);
    if(example){
        ReactDOM.render(
            React.createElement(ReactPlayground, {codeText: document.getElementById('code'+id).innerHTML}),
            example
        );
    }
}

},{"react":undefined,"react-dom":undefined}]},{},[1]);
