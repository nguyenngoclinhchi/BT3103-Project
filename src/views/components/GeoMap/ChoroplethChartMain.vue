<template>
    <div id = "app">
        <choropleth-chart :chart-data = "chartData" :options = "options"/>
    </div>
</template>

<script>
    import ChoroplethChart from "./ChoroplethChart.vue";
    import countriesJson from "world-atlas/countries-50m.json";
    import {topojson} from "chartjs-chart-geo";

    const countries = topojson.feature(
        countriesJson,
        countriesJson.objects.countries
    ).features;

    export default {
        name: "ChoroplethChartMain",
        components: {
            ChoroplethChart: ChoroplethChart,
        },
        data() {
            return {
                chartData: {
                    labels: countries.map(d => d.properties.name),
                    datasets: [
                        {
                            label: "Countries",
                            backgroundColor: context => {
                                if (context.dataIndex == null) {
                                    return null;
                                }
                                const value = context.dataset.data[context.dataIndex];
                                return `rgb(0, 0, ${value.value * 255})`;
                            },
                            data: countries.map(d => {
                                return ({
                                    feature: d, value: Math.random()
                                })
                            }),
                        }
                    ]
                },
                options: {
                    showOutline: true,
                    showGraticule: true,
                    legend: {
                        display: false,
                    },
                    scale: {
                        projection: 'equalEarth',
                    },
                    geo: {
                        colorScale: {
                            display: true,
                        },
                    },
                },
                stringencyIndexItem: {
                    uniqueQuery: '',
                    countryCode: '',
                    dataIndex: '',
                    date: ''
                },
                stringencyArray: [],
            };
        },
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
