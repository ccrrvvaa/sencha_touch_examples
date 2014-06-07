/*global Ext:false */
Ext.application({
    launch: function () {
        var store = Ext.create("Ext.data.Store", {
            fields: ['name', 'value1', 'value2'],
            data: [
                { name: 'Jan', value1: 5, value2: 412 },
                { name: 'Feb', value1: 23, value2: 142 },
                { name: 'Mar', value1: 83, value2: 113 },
                { name: 'Apr', value1: 233, value2: 834 },
                { name: 'May', value1: 509, value2: 1024 },
                { name: 'Jun', value1: 864, value2: 1102 },
                { name: 'Jul', value1: 1144, value2: 425 },
                { name: 'Aug', value1: 1179, value2: 324 },
                { name: 'Sep', value1: 946, value2: 39 },
                { name: 'Oct', value1: 591, value2: 1142 },
                { name: 'Nov', value1: 288, value2: 523 },
                { name: 'Dec', value1: 109, value2: 634 }
            ]
        });
        Ext.create("Ext.Panel", {
            fullscreen: true,
            layout: 'fit',
            style: 'background: white',
            items: [
                {
                    xtype: 'chart',
                    background: "none",
                    store: store,
                    animate: true,
                    interactions: ['panzoom', 'itemhighlight'],
                    legend: {
                        position: "top"
                    },
                    series: [
                        {
                            type: 'line',
                            xField: 'name',
                            yField: 'value1',
                            title: 'Line',
                            style: {
                                smooth: true,
                                stroke: '#115fa6',
                                lineWidth: 3,
                                shadowColor: 'rgba(0,0,0,0.7)',
                                shadowBlur: 10,
                                shadowOffsetX: 3,
                                shadowOffsetY: 3
                            },
                            highlightCfg: {
                                scale: 2
                            },
                            marker: {
                                type: 'circle',
                                stroke: '#0d1f96',
                                fill: '#115fa6',
                                lineWidth: 2,
                                radius: 4,
                                shadowColor: 'rgba(0,0,0,0.7)',
                                shadowBlur: 10,
                                shadowOffsetX: 3,
                                shadowOffsetY: 3,
                                fx: {duration: 300}
                            }
                        },
                        {
                            type: 'bar',
                            xField: 'name',
                            yField: ['value2'],
                            title: ['Bar'],
                            style: {
                                maxBarWidth: 15,
                                lineWidth: 1.5,
                                fill: "#a61120",
                                stroke: 'black',
                                shadowColor: 'rgba(0,0,0,0.7)',
                                shadowBlur: 10,
                                shadowOffsetX: 3,
                                shadowOffsetY: 3
                            }
                        }
                    ],
                    axes: [
                        {
                            type: 'numeric',
                            position: 'right',
                            grid: {
                                odd: {
                                    fill: '#fafafa'
                                }
                            },
                            style: {
                                axisLine: false,
                                estStepSize: 20,
                                stroke: '#ddd'
                            },
                            minimum: 0,
                            maximum: 1210
                        },
                        {
                            type: 'category',
                            position: 'top',
                            visibleRange: [0, 0.7],
                            style: {
                                estStepSize: 1,
                                stroke: '#999'
                            }
                        }
                    ]
                }, {
                    xtype: 'container',
                    left: 40,
                    top: -10,
                    width: 160,
                    height: 160,
                    layout: 'fit',
                    items: [{
                        interactions: ['rotate', 'itemhighlight'],
                        //style: 'z-index: 5',
                        xtype: 'polar',
                        background: '#000',
                        store: store,
                        innerPadding: 16,
                        series: [
                            {
                                type: 'pie',
                                xField: 'value2',
                                donut: 10,
                                highlightCfg: {
                                    margin: 15
                                },
                                style: {
                                    fillOpacity: 0.9,
                                    stroke: "#444"
                                },
                                subStyle: {
                                    fillStyle: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
                                }
                            }
                        ]
                    }]
                }

            ]
        });
    } // launch
}); // application()