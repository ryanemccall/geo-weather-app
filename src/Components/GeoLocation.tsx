import { Component } from "react";

type GeoLocationProps = {
    lat: any,
    long: any
}
export class GeoLocation extends Component <GeoLocationProps, {}> {
    render() {
        const { location } = this.props
    }
     getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            location = position.coords.latitude;

        })
    }
    

}