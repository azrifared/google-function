import fetch from 'node-fetch';

class FetchServices {
  static async rawToJSON(rawData) {
    const data = await rawData.json();
    return data;
  }

  static async get(url, options = {}) {
    const data = await fetch(url, options)
    return await this.rawToJSON(data);
  }
}

export class GoogleFunction {
  private MAP_API_TOKEN = process.env.MAP_API_TOKEN;
  private BASE_URL = 'https://maps.googleapis.com/maps/api';

  public geocode = async (placeId: string) => {
    const apiUrl = `${this.BASE_URL}/geocode/json?place_id=${placeId}&key=${this.MAP_API_TOKEN}`;
    const data = await FetchServices.get(apiUrl);

    return data;
  }

  public placeAutoComplete = async (input: string) => {
    const  apiUrl = `${this.BASE_URL}/place/autocomplete/json?input=${input}&key=${this.MAP_API_TOKEN}`;
    const data = await FetchServices.get(apiUrl);

    return data;
  }
}