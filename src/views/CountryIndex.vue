<template>
    <div>
        <hero></hero>
        <choropleth-chart-main></choropleth-chart-main>
    </div>
</template>

<script>
    import Hero from "./components/Hero.vue";
    import ChoroplethChartMain from "./components/GeoMap/ChoroplethChartMain.vue";

    export default {
        name: "CountryIndex",
        components: {
            ChoroplethChartMain,
            Hero
        }
    }
</script>;