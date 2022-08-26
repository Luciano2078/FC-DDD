export default class Address {
    _street:    string = "";
    _nro:       number = 0;
    _zip:       string = "";
    _city:      string = "";
    _country:   string = "";

    constructor(street: string, nro: number, zip: string, city: string, country: string) {
        this._street = street;
        this._nro = nro;
        this._zip = zip;
        this._city = city;
        this._country = country;
        this.validate();
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }
        if (this._nro === 0) {
            throw new Error("Number is required");
        }
        if (this._zip.length === 0) {
            throw new Error("Zip Code is required");
        }
        if (this._city.length === 0) {
            throw new Error("City is required");
        }
        if (this._country.length === 0) {
            throw new Error("Country is required");
        }
    }

    toString() {
        return `${this._street}, ${this._nro}, ${this._zip}, ${this._city}, ${this._country}`;
    }
}
