//年份，评分，票房，名称，类型
var dataCJS = [
    [2003, 5.5, 23000, "老鼠爱上猫", "喜剧 / 动作 / 爱情"],
    [2011, 4.4, 15064, "画壁", "剧情 / 动作 / 爱情 / 奇幻"],
    [2008, 6.5, 20470, "画皮", "剧情 / 动作 / 惊悚"],
    [2012, 5, 19985, "四大名捕", "动作 / 爱情 / 悬疑 / 武侠 / 古装"],
    [2013, 4.8, 17428, "四大名捕2", "动作 / 悬疑 / 奇幻 / 武侠 / 古装"],
    [2014, 4.7, 19234, "四大名捕大结局", "动作 / 爱情 / 悬疑 / 武侠 / 古装"]
];
var dataCKX = [
    [2011, 6.6, 17021, "武侠", "剧情 / 动作 / 悬疑 / 武侠"],
    [2013, 7.6, 53879.9, "中国合伙人", "剧情"],
    [2014, 8.3, 34517.2, "亲爱的", "剧情 / 家庭"],
    [2007, 6.9, 2346, "投名状", "剧情 / 动作 / 战争 / 古装"],
    [2005, 7.6, 3007, "如果·爱", "剧情 / 爱情 / 歌舞"],
];
var dataDQF = [
    [2004, 6.5, 650, "大事件", "剧情 / 动作 / 犯罪"],
    [2012, 5.8, 2148.8, "高海拔之恋Ⅱ", "爱情"],
    [2013, 7.1, 21419, "盲探", "喜剧 / 爱情 / 悬疑 / 惊悚 / 犯罪"],
    [2014, 5.4, 19874.9, "单身男女2", "喜剧 / 爱情"],
    [2015, 6, 4750, "华丽上班族", "剧情 / 喜剧 / 爱情 / 歌舞"],
    [2016, 5.9, 10054, "三人行", "剧情 / 动作 / 犯罪"],
    [2003, 6.4, 1401, "大块头有大智慧", "剧情 / 动作 / 惊悚"],
];
var dataEDS = [
    [2005, 6.3, 579.4, "千杯不醉", "喜剧 / 爱情"],
    [2010, 6.6, 12658, "枪王之王", "动作 / 悬疑 / 惊悚"],
    [2012, 6.6, 17364.1, "大魔术师", "剧情 / 喜剧 / 爱情 / 奇幻"],
    [2015, 7.2, 6319.3, "我是路人甲", "剧情 / 喜剧"],
];
var dataLCX = [
    [2008, 7.2, 1547.6, "证人", "动作 / 惊悚"],
    [2010, 7.3, 5276.3, "线人", "剧情 / 动作 / 惊悚"],
    [2010, 6.1, 1843, "火龙对决", "动作 / 惊悚"],
    [2012, 6.4, 12940.3, "逆战", "剧情 / 动作 / 惊悚 / 犯罪"],
    [2013, 7.8, 11789, "激战", "剧情 / 动作 / 运动"],
    [2014, 5.9, 10833, "魔警", "动作 / 悬疑 / 惊悚 / 犯罪"],
    [2015, 7.2, 14529.1, "破风", "剧情 / 运动"],
    [2016, 8, 118453.2, "湄公河行动", "动作 / 犯罪"],
];
var dataLWQ = [
    [2010, 6, 14243.0, "精武风云·陈真", "动作"],
    [2011, 7, 1999, "不再让你孤单", "剧情 / 爱情"],
    [2012, 4.6, 7187, "血滴子", "动作 / 武侠 / 古装"],
    [2017, 0, 38158, "建军大业", "战争"],
    [2006, 6.8, 7431, "伤城", "剧情 / 惊悚 / 犯罪"],
];
var dataLZW = [
    [2005, 5.3, 5000, "情癫大圣", "剧情 / 喜剧 / 动作 / 爱情 / 科幻 / 奇幻", "刘镇伟"],
    [2010, 5.2, 1027, "越光宝盒", "喜剧 / 奇幻", "刘镇伟"],
    [2010, 5, 842, "出水芙蓉", "喜剧 / 运动", "刘镇伟"],
    [2011, 3.9, 7497, "东成西就2011", "喜剧 / 动作 / 爱情 / 音乐 / 奇幻", "刘镇伟"],
    [2014, 3, 2962, "大话天仙", "喜剧 / 奇幻 / 古装", "刘镇伟"],
    [2016, 3.6, 36606, "大话西游3", "喜剧 / 爱情 / 奇幻", "刘镇伟"],
];
var dataPHX = [
    [2012, 7.3, 7059, "春娇与志明", "剧情 / 喜剧 / 爱情"],
    [2014, 5.8, 23048, "撒娇女人最好命", "喜剧 / 爱情"],
    [2014, 5.3, 1430, "人间·小团圆", "剧情"],
    [2017, 7.2, 17483, "春娇救志明", "剧情 / 喜剧 / 爱情"],
];
var dataWJW = [
    [2004, 7.4, 2.3, "2046", "剧情 / 爱情 / 科幻 / 奇幻"],
    [2007, 7.6, 1207, "蓝莓之夜 My Blueberry Nights", "剧情 / 爱情"],
    [2009, 8.7, 2580, "东邪西毒：终极版", "剧情 / 动作 / 爱情"],
    [2013, 7.7, 28923, "一代宗师", "剧情 / 动作 / 传记"],
];
var dataWJ = [
    [2009, 5, 10022.3, "大内密探灵灵狗", "喜剧"],
    [2009, 6.3, 1906.2, "金钱帝国", "犯罪"],
    [2010, 5.4, 3740, "美丽密令", "喜剧"],
    [2011, 5.3, 10244.5, "财神客栈", "喜剧 / 动作 / 悬疑 / 古装"],
    [2012, 6.6, 14975, "大上海", "剧情 / 动作"],
    [2012, 4, 2526, "嫁个100分男人", "喜剧 / 爱情"],
    [2016, 3.3, 26034, "王牌逗王牌", "喜剧 / 动作 / 冒险"],
    [2013, 4.6, 7022, "笑功震武林", "喜剧 / 动作"],
    [2016, 3.9, 111818, "澳门风云3", "喜剧 / 动作"],
    [2015, 5.6, 97491, "澳门风云2", "喜剧 / 动作"],
    [2014, 5.7, 52489, "澳门风云", "喜剧 / 动作"],
];
var dataWYS = [
    [2008, 6.3, 27686, "赤壁(上) ", "剧情 / 动作 / 历史 / 战争 / 冒险"],
    [2009, 6.4, 24353, "赤壁(下) ", "剧情 / 动作 / 历史 / 战争"],
    [2014, 5.8, 19542, "太平轮(上) ", "剧情 / 爱情 / 战争"],
    [2015, 6.5, 5105.2, "太平轮(下)·彼岸 ", "剧情 / 爱情 / 灾难"],
];
var dataXK = [
    [2005, 5.8, 8345.3, "七剑", "剧情 / 动作 / 武侠 / 古装"],
    [2008, 6, 1983.0, "女人不坏", "喜剧"],
    [2008, 5.8, 1962, "深海寻人", "剧情 / 爱情 / 惊悚 / 恐怖 / 奇幻"],
    [2010, 6.4, 28260.0, "狄仁杰之通天帝国", "剧情 / 动作 / 悬疑 / 犯罪 / 古装"],
    [2011, 6.7, 54011.0, "龙门飞甲", "动作 / 武侠 / 古装"],
    [2013, 6.5, 60077.0, "狄仁杰之神都龙王", "动作 / 悬疑 / 犯罪 / 古装"],
    [2014, 7.7, 88208, "智取威虎山", "动作 / 战争 / 冒险"],
    [2017, 5.6, 165592, "西游伏妖篇", "喜剧 / 动作 / 奇幻 / 古装"],
];
var dataYWX = [
    [2004, 6.3, 802.4, "大城小事", "剧情 / 爱情"],
    [2006, 5.7, 5360.6, "龙虎门", "剧情 / 动作"],
    [2007, 6.9, 3461.9, "导火线", "动作"],
    [2008, 7.5, 8487.0, "叶问", "剧情 / 动作 / 传记 / 历史"],
    [2010, 7.2, 23109.0, "叶问2：宗师传奇", "动作 / 传记 / 历史"],
    [2011, 4.2, 2004.3, "开心魔法", "喜剧 / 奇幻"],
    [2011, 5.3, 14093.1, "倩女幽魂", "剧情 / 惊悚 / 奇幻 / 古装"],
    [2015, 6.3, 77031, "叶问3", "剧情 / 动作 / 传记 / 历史"],
    [2017, 7.5, 8424.4, "杀破狼·贪狼", "剧情 / 动作"],
    [2015, 4.4, 15631.4, "冲上云霄", "剧情 / 爱情"],
];
var dataZXC = [
    [2004, 7.9, 2560.2, "功夫", "喜剧 / 动作 / 犯罪 / 奇幻"],
    [2008, 6.3, 3398, "长江七号", "剧情 / 喜剧 / 科幻 / 家庭 / 奇幻"],
    [2016, 6.8, 339212.8, "美人鱼", "喜剧 / 爱情 / 奇幻"],
    [2013, 7.1, 124699.1, "西游降魔篇", "喜剧 / 奇幻 / 冒险"],
]




var schema = [
    { name: 'year', index: 0, text: '年份' },
    { name: 'socre', index: 1, text: '评分' },
    { name: 'gross', index: 2, text: '票房' },
    { name: 'name', index: 3, text: '名称' },
    { name: 'type', index: 4, text: '类型' }
];
var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

// 指定图表的配置项和数据
option = {

    color: [
        '#FFB90F', '#6CA6CD', '#FF3E96', '#2a5caa', '#CDAF95', "#3C3147", '#81702A', '#CAFF70', '#CC6E38', '#B452CD', '#3AB449', '#E63D39', '#f58220', '#B03060'
    ],
    legend: {
        y: 'top',
        data: ['陈嘉上', '陈可辛', '杜琪峰', '尔冬升', '林超贤', "刘伟强", "刘镇伟", "彭浩翔", '王家卫', '王晶', '吴宇森', '徐克', '叶伟信', '周星驰'],
        textStyle: {
            color: "#292929",
            fontSize: 16
        },
        selectedMode: 'multiple',
        selected: {
            "陈嘉上": false,
            '陈可辛': false,
            '杜琪峰': false,
            '尔冬升': false,
            '林超贤': false,
            "刘伟强": false,
            "刘镇伟": false,
            "彭浩翔": false,
            '王家卫': false,
            '王晶': false,
            '吴宇森': false,
            '徐克': true,
            '叶伟信': false,
            '周星驰': false
        }
    },
    grid: {
        x: '15%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                obj.seriesName + ' ' + value[0] + '年：' +
                value[3] +
                '</div>' +
                schema[1].text + '：' + value[1] + '<br>' +
                schema[2].text + '：' + value[2] + '<br>' +
                schema[4].text + '：' + value[4] + '<br>'
        }
    },
    xAxis: {
        type: 'value',
        name: '年份',
        nameGap: 16,
        nameTextStyle: {
            color: "#292929",
            fontSize: 16
        },
        min: 2000,
        max: 2020,
        splitLine: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: "#292929"
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '评分',
        nameTextStyle: {
            color: "#292929",
            fontSize: 16
        },
        min: 2,
        max: 10,
        axisLine: {
            lineStyle: {
                color: "#292929"
            }
        },
        splitLine: {
            show: true
        }
    },
    visualMap: [{
            left: 'right',
            top: '10%',

            dimension: 2,
            min: 0,
            max: 350000,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：票房高低（单位：万）'],
            textGap: 30,
            textStyle: {
                color: "#292929"
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#B22222']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        },
        {
            left: 'right',
            bottom: '5%',
            show: false,
            dimension: 1,
            min: 0,
            max: 10,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：评分'],
            textGap: 30,
            textStyle: {
                color: "#292929"
            },
            inRange: {
                colorLightness: [1, 0.5]
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [{
            name: '陈嘉上',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataCJS
        },
        {
            name: '陈可辛',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataCKX
        },
        {
            name: '杜琪峰',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataDQF
        },
        {
            name: '尔冬升',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataEDS
        },
        {
            name: '林超贤',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataLCX
        },
        {
            name: '刘伟强',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataLWQ
        },
        {
            name: '刘镇伟',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataLZW
        },
        {
            name: '彭浩翔',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataPHX
        },
        {
            name: '王家卫',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataWJW
        }, {
            name: '王晶',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataWJ
        }, {
            name: '吴宇森',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataWYS
        }, {
            name: '徐克',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataXK
        }, {
            name: '叶伟信',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataYWX
        },
        {
            name: '周星驰',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataZXC
        }
    ]
};