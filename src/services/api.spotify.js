import config from '../config/config';
import URLS from '../constants/URLS.json';



export const authorizeSpotify = () => {
    console.log('config')
console.log(config);

console.log('URLS')
console.log(URLS);
    // make an authorize call to spotify
    
    let queryParams = {
        response_type : URLS.spotify.authorize.params.values.response_type.default,
        client_id : config.spotify.client_id,
        redirect_uri : URLS.spotify.authorize.params.values.redirect_uri.default
    }
    let url = buildUrl(URLS.spotify.authorize.url , queryParams);
    var headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', "*");
    console.log(url);
    fetch(url , {
        method : 'GET',
        mode : 'cors'
    })
    .then(res => res.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));
}


function buildUrl(url, parameters) {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs +=
                key + "=" + encodeURIComponent(value) + "&";
                // encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }

    return url;
}