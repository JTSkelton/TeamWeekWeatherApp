//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=539b046093da5951bf4b62ac2300d7f7

export default class WeatherData {
  static async getWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&lang=en&appid=${process.env.API_KEY}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}