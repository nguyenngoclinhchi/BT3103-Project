import {topojson} from "chartjs-chart-geo";
import worldCode from "./data/all.json";
import countriesJson from "world-atlas/countries-50m.json";
import database from "../../../firebase";
import axios from "@/views/components/GeoMap/axios";

const countries = topojson.feature(
    countriesJson,
    countriesJson.objects.countries
).features;
let countryList = [];
let countryItem = {
    countryCode: "",
    dataIndex: ""
}

axios.get('https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-10-01/2020-10-01').then(response => {
    for (let key in response.data.data) {
        for (let countryKey in response.data.data[key]) {
            let data = response.data.data[key][countryKey].stringency + "";
            let alphaCode = countryKey + "";
            let dataIndex = data;
            let date = key + "";
            let uniqueQuery = date + "-" + alphaCode;
            let stringencyIndices = database.collection("stringencyIndices");
            let countryCode = findMatchingAlphaCode(alphaCode);
            stringencyIndices.doc(uniqueQuery).set({
                countryCode: countryCode,
                dataIndex: dataIndex,
                date: date,
                uniqueQuery: uniqueQuery,
                alphaCode: alphaCode,
            });
        }
    }
});

async function getData(countryCode) {
    if (countryCode != null) {
        await database.collection("stringencyIndices").where("countryCode", "==", countryCode)
            .limit(1).get()
            .then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        countryItem.countryCode = countryCode;
                        countryItem.dataIndex = doc.data().dataIndex;
                        console.log(countryItem)
                        countryList.push(countryItem);
                    })
                }
            )
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        return Math.random();
    }
}

function getFinalResult(countryCode) {
    getData(countryCode).then(result => {
        console.log(result, ":", parseFloat(countryItem.dataIndex));
    });
    return Math.random();
}

function findMatchingAlphaCode(geoId) {
    for (let index = 0; index < worldCode.length; index++) {
        if (worldCode[index]["alpha-3"] === geoId) {
            return worldCode[index]["country-code"];
        }
    }
    return "null";
}
let indexData = countries.map(d => {
    return ({
        feature: d, value: getFinalResult(d.id)
    });
})
console.log(indexData)
export default indexData;
