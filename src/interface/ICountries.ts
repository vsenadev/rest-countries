

export interface ICountries  {
    "flags": {
        "png": string,
        "svg": string,
        "alt": string
    },
    "name": {
        "common": string,
        "official": string,
        "nativeName": {
            "eng": {
                "official": string,
                "common": string
            },
            "smo": {
                "official": string,
                "common": string
            }
        }
    },
    "tld": [
        string
    ],
    "currencies": {
        "USD": {
            "name": string,
            "symbol": string
        }
    }
    "capital": [
        string
    ],
    "region": string,
    "subregion": string,
    "languages": { [key: string]: string},
    "population": number
}