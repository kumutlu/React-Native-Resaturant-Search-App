import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mLnMlV2h1KxA1Ul-OvAawm48X-WOmzi4iJvHeeHPJToTq9yzF0Rft0lqttA4uEJK9mM3ZlFflMvcrqZD4lEBHbPr6nyEC2zg8JfrRM1q9EG2BrRgTO_RX6WoVa9rXXYx"
  }
});
