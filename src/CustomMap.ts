import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappabel: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappabel.location.lat,
        lng: mappabel.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappabel.markerContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
