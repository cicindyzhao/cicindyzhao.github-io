option1 = {
    title: {
        text: '1997-2016年香港电影产量变化',
        subtext: '（数据来源：豆瓣）',
        textStyle: {
            fontSize: 14,
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        right: "25px",
        data: ['港产片', '中港合拍片']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: { show: false },
            dataView: {
                readOnly: true
            },

            //         // magicType: {
            //         //     type: ['line', 'bar']
            //         // },
            //         // restore: {},
            //         // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },

    series: [{
        name: '港产片',
        type: 'line',
        data: [186, 85, 169, 144, 119, 91, 77, 63, 57, 51, 77, 80, 145, 165, 158, 167, 153, 166, 82, 82],
        markPoint: {
            data: [
                //     {
                //     type: 'max',
                //     name: '最大值'
                // }, 
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },

    }, {
        name: '中港合拍片',
        type: 'line',
        data: [4, 3, 8, 6, 6, 6, 14, 16, 15, 18, 16, 19, 18, 38, 35, 34, 35, 40, 43, 43],
        markPoint: {
            data: [{
                name: '节点',
                value: "38",
                xAxis: '2010',
                yAxis: 38
            }, {
                name: '2003',
                value: "14",
                xAxis: '2003',
                yAxis: 14
            }]
        },
        markLine: {
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            data: [
                { xAxis: '2003' },
                { xAxis: "2009" }
            ]
        },

    }]
};