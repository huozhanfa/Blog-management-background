import React, { Component, createRef } from 'react'
import { 
    Card,
    Row,
    Col
} from 'antd';
import echarts from 'echarts';
import '../static/css/Dashboard.less';
export default class Dashboard extends Component {
    constructor(){
        super()
        this.articleAmount1 =createRef()
        this.articleAmount2 =createRef()
    }
    initArticleChart2=()=>{
          var data = [{
               value: 3661,
               name: '<10w'
          }, {
               value: 5713,
               name: '10w-50w'
          }, {
               value: 9938,
               name: '50w-100w'
          }, {
               value: 17623,
               name: '100w-500w'
          }, {
               value: 3299,
               name: '>500w'
          }];
          const option2 = {
               backgroundColor: '#fff',
               title: {
               text: '注册资金',
               subtext: '2016年',
               x: 'center',
               y: 'center',
               textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16
               }
               },
               tooltip: {
               show: true,
               trigger: 'item',
               formatter: "{b}: {c} ({d}%)"
               },
               legend: {
               orient: 'horizontal',
               bottom: '0%',
               data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
               },
               series: [{
               type: 'pie',
               selectedMode: 'single',
               radius: ['25%', '58%'],
               color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
          
               label: {
                    normal: {
                         position: 'inner',
                         formatter: '{d}%',
          
                         textStyle: {
                              color: '#fff',
                              fontWeight: 'bold',
                              fontSize: 14
                         }
                    }
               },
               labelLine: {
                    normal: {
                         show: false
                    }
               },
               data: data
               }, {
               type: 'pie',
               radius: ['58%', '83%'],
               itemStyle: {
                    normal: {
                         color: '#F2F2F2'
                    },
                    emphasis: {
                         color: '#ADADAD'
                    }
               },
               label: {
                    normal: {
                         position: 'inner',
                         formatter: '{c}家',
                         textStyle: {
                              color: '#777777',
                              fontWeight: 'bold',
                              fontSize: 14
                         }
                    }
               },
               data: data
               }]
          }
          // 使用刚指定的配置项和数据显示图表。
          this.articleChart2.setOption(option2);    
     }
    initArticleChart1=()=>{
          var xData = function() {
               var data = [];
               for (var i = 1; i < 13; i++) {
               data.push(i + "月份");
               }
               return data;
          }();
          const option1 = {
               backgroundColor: "#344b58",
               "title": {
               "text": "本年文章男女人数统计",
               // "subtext": "BY Wang Dingding",
               x: "4%",
          
               textStyle: {
                    color: '#fff',
                    fontSize: '22'
               },
               subtextStyle: {
                    color: '#90979c',
                    fontSize: '16',
          
               },
               },
               "tooltip": {
               "trigger": "axis",
               "axisPointer": {
                    "type": "shadow",
                    textStyle: {
                         color: "#fff"
                    }
          
               },
               },
               "grid": {
               "borderWidth": 0,
               "top": 110,
               "bottom": 95,
               textStyle: {
                    color: "#fff"
               }
               },
               "legend": {
               x: '4%',
               top: '8%',
               textStyle: {
                    color: '#90979c',
               },
               "data": ['女', '男', '平均']
               },
               
          
               "calculable": true,
               "xAxis": [{
               "type": "category",
               "axisLine": {
                    lineStyle: {
                         color: '#90979c'
                    }
               },
               "splitLine": {
                    "show": false
               },
               "axisTick": {
                    "show": false
               },
               "splitArea": {
                    "show": false
               },
               "axisLabel": {
                    "interval": 0,
          
               },
               "data": xData,
               }],
               "yAxis": [{
               "type": "value",
               "splitLine": {
                    "show": false
               },
               "axisLine": {
                    lineStyle: {
                         color: '#90979c'
                    }
               },
               "axisTick": {
                    "show": false
               },
               "axisLabel": {
                    "interval": 0,
          
               },
               "splitArea": {
                    "show": false
               },
          
               }],
               "dataZoom": [{
               "show": true,
               "height": 30,
               "xAxisIndex": [
                    0
               ],
               bottom: 30,
               "start": 10,
               "end": 80,
               handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
               handleSize: '110%',
               handleStyle:{
                    color:"#d3dee5",
                    
               },
                    textStyle:{
                    color:"#fff"},
                    borderColor:"#90979c"
               
               
               }, {
               "type": "inside",
               "show": true,
               "height": 15,
               "start": 1,
               "end": 35
               }],
               "series": [{
                    "name": "女",
                    "type": "bar",
                    "stack": "总量",
                    "barMaxWidth": 35,
                    "barGap": "10%",
                    "itemStyle": {
                         "normal": {
                              "color": "rgba(255,144,128,1)",
                              "label": {
                                   "show": true,
                                   "textStyle": {
                                   "color": "#fff"
                                   },
                                   "position": "inside",
                                   formatter: function(p) {
                                   return p.value > 0 ? (p.value) : '';
                                   }
                              }
                         }
                    },
                    "data": [
                         709,
                         1917,
                         2455,
                         2610,
                         1719,
                         1433,
                         1544,
                         3285,
                         5208,
                         3372,
                         2484,
                         4078
                    ],
               },
          
               {
                    "name": "男",
                    "type": "bar",
                    "stack": "总量",
                    "itemStyle": {
                         "normal": {
                              "color": "rgba(0,191,183,1)",
                              "barBorderRadius": 0,
                              "label": {
                                   "show": true,
                                   "position": "inside",
                                   formatter: function(p) {
                                   return p.value > 0 ? (p.value) : '';
                                   }
                              }
                         }
                    },
                    "data": [
                         327,
                         1776,
                         507,
                         1200,
                         800,
                         482,
                         204,
                         1390,
                         1001,
                         951,
                         381,
                         220
                    ]
               }, {
                    "name": "总数",
                    "type": "line",
                    symbolSize:10,
                    symbol:'circle',
                    "itemStyle": {
                         "normal": {
                              "color": "rgba(252,230,48,1)",
                              "barBorderRadius": 0,
                              "label": {
                                   "show": true,
                                   "position": "top",
                                   formatter: function(p) {
                                   return p.value > 0 ? (p.value) : '';
                                   }
                              }
                         }
                    },
                    "data": [
                         1036,
                         3693,
                         2962,
                         3810,
                         2519,
                         1915,
                         1748,
                         4675,
                         6209,
                         4323,
                         2865,
                         4298
                    ]
               },
               ]
          }
      
          // 使用刚指定的配置项和数据显示图表。
          this.articleChart1.setOption(option1);
     
     
         // 指定图表的配置项和数据
     //    const option = {
     //        title: {
     //            text: 'ECharts 入门示例'
     //        },
     //        tooltip: {},
     //        legend: {
     //            data:['销量']
     //        },
     //        xAxis: {
     //            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
     //        },
     //        yAxis: {},
     //        series: [{
     //            name: '销量',
     //            type: 'bar',
     //            data: [5, 20, 36, 10, 10, 20]
     //        }]
     //    };
        // 使用刚指定的配置项和数据显示图表。
          // this.articleChart.setOption(option);
        
    }
    componentDidMount(){
        this.articleChart1 =  echarts.init(this.articleAmount1.current);
        this.initArticleChart1()
        this.articleChart2 =  echarts.init(this.articleAmount2.current);
        this.initArticleChart2()
    }
    render() {
        return (
            <>
                <Card 
                    title='概览' 
                    bordered={false} 
                >
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="qf-gutter-box" style={{backgroundColor:"#f44336"}}>博客文章总数量：34</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="qf-gutter-box" style={{backgroundColor:'#FFCA28'}}>文章数量：12</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="qf-gutter-box" style={{backgroundColor:'#4CAF50'}}>生活数量：12</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="qf-gutter-box" style={{backgroundColor:'#2196F3'}}>关于我数量：10</div>
                        </Col>
                    </Row>
                </Card>
                <Card 
                    title='最近浏览量' 
                    bordered={false} 
                >
                    <div ref={this.articleAmount1} style={{ display: 'inline-block', height: '400px', width: '600px'}}/>
                    <div ref={this.articleAmount2} style={{ display: 'inline-block', height: '400px', width: '400px'}}/>
                </Card>
            </>
        )
    }
}