import * as SmartyStreetsSDK from "smartystreets-javascript-sdk";

const websiteKey = "22065928663483978";
const SmartyStreetsCore = SmartyStreetsSDK.core;

const smartyStreetsSharedCredentials = new SmartyStreetsCore.SharedCredentials(websiteKey);
const usStreetClientBuilder = new SmartyStreetsCore.ClientBuilder(smartyStreetsSharedCredentials);
const lookup = new SmartyStreetsSDK.usStreet.Lookup();

const usStreetClient = usStreetClientBuilder.buildUsStreetApiClient();


export const plusSlides = () => {
    lookup.street = "3901 SW 154th Ave";
    lookup.city = "Davie";
    lookup.state = "FL";
    lookup.maxCandidates = 10;
    lookup.zipCode = 33331;
    usStreetClient.send(lookup)
        .then(handleSuccess)
        .catch(handleError)
    function handleSuccess(response) {
        console.log("Step 3. Show the resulting candidate addresses:",response.lookups[0].result[0].metadata);
        let lookup = response.lookups[0];
        lookup.result.map(candidate => console.log(`${candidate.deliveryLine1}, ${candidate.lastLine}`));
    }

    function handleError(response) {
        console.log("error", response);
    }
}
