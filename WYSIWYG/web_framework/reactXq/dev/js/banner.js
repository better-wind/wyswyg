/**
 * Created by wjf55 on 2016/9/11.
 */

import '../css/banner.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import './zepto.js';

var BannerModule = () => {

    let Banner = React.createClass({
        render: function() {
            return (
                <section classNamr='banner-list-module'>

                </section>
            );
        }
    });
    ReactDOM.render(
        <Banner  />,
        document.getElementById('bannerWrap')
    );
}

export {BannerModule}
