/**
 * Created by hemingming on 2017/3/3.
 */
import React from "react";
import ReactDom from "react-dom";
import 'antd/dist/antd.css'; //这个没有使用按需加载
import Hello from "./src/js/components/hello/hello.jsx";
import { DatePicker } from 'antd';
// import "../css/index.less"

ReactDom.render( 
    <DatePicker />,
    document.getElementById("content")
);