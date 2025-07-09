// import { subDomainList } from "./constant";

// export const getApps = () => {
//     const subdomain = getSubDomain(window.location.hostname);

//     const mainApp = subDomainList.find((app) => app.main);
//     if (subdomain === "") return mainApp.app;

//     const apps = subDomainList.find((app) => subdomain === app.subdomain);

//     return apps ? apps.app : mainApp.app;
// }

// // url.localhost
// // url.urlbestshort.com
// export const getSubDomain = (location) => {
//     const locationParts = location.split(".");
//     const isLocalhost = locationParts.slice(-1)[0] === "localhost";
//     const sliceTill = isLocalhost ? -1 : -2;
//     return locationParts.slice(0, sliceTill).join("");
// };



import { subDomainList } from "./constant";

/**
 * Returns the correct app component based on subdomain.
 */
export const getApps = () => {
    const subdomain = getSubDomain(window.location.hostname);

    const mainApp = subDomainList.find((app) => app.main);

    // Ensure mainApp exists
    if (!mainApp) {
        throw new Error("Main app not defined in subDomainList");
    }

    // No subdomain? Return main app
    if (subdomain === "") {
        return mainApp.app;
    }

    // Find matching subdomain
    const matchedApp = subDomainList.find((app) => subdomain === app.subdomain);

    return matchedApp ? matchedApp.app : mainApp.app;
};

/**
 * Extracts the subdomain from the given hostname.
 * Examples:
 *   "abc.localhost" => "abc"
 *   "xyz.domain.com" => "xyz"
 *   "domain.com" => ""
 */
export const getSubDomain = (location) => {
    if (!location) return "";

    const locationParts = location.split(".");
    const isLocalhost = locationParts.at(-1) === "localhost";
    const sliceTill = isLocalhost ? -1 : -2;
    const subdomain = locationParts.slice(0, sliceTill).join("");

    return subdomain;
};
