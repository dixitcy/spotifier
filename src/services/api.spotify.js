import config from '../config/config';
import URLS from '../constants/URLS.json';


export const searchSpotify = (searchString) => {
    let queryParams = {
        q : searchString,
        type : "artist",
        limit : URLS.spotify.search.params.values.limit.default
    }
    let url = buildUrl(config.spotify.web_api_base_url+URLS.spotify.search.url , queryParams);

    var headers = new Headers();

    headers.append('Accept' , '*');
    headers.append('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
    headers.append('Content-Type', 'application/json');
    console.log(url);
    fetch(url , {
        method : 'GET',
        mode : 'cors',
        headers : headers
    })
    .then(res => res.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));
}


export const authorizeSpotify = () => {
    // make an authorize call to spotify
    
    let queryParams = {
        response_type : URLS.spotify.authorize.params.values.response_type.default,
        client_id : config.spotify.client_id,
        redirect_uri : URLS.spotify.authorize.params.values.redirect_uri.default
    }
    let url = buildUrl(URLS.spotify.authorize.url , queryParams);
    window.location = url;
    // var headers = new Headers();
    // // headers.append('Access-Control-Allow-Origin', "*");
    // console.log(url);
    // fetch(url , {
    //     method : 'GET',
    //     mode : 'cors'
    // })
    // .then(res => res.json())
    // .then(response => console.log(response))
    // .catch(err => console.log(err));
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