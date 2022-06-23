Google API services

## How to run for development

1. Run `npm install` to fetch dependencies
2. Create `.env` file in project root directory with following environment variables:
  - `MAP_API_TOKEN` 
3. Run `npm run dev` 
4. By default server will be running on `http://localhost:8000` .

### Environment variables
| Env Variable         | Required        | Default Value      |
| -------------------- | --------------- | ------------------ |
| MAP_API_TOKEN        | _required_      | -                  |

Once the services is running you can try the HTTP request as below using GET method:
`http://localhost:8000/place/autocomplete?input=<YOUR INPUT WORD>`


## Learn More

To learn more about about this api, usage and billing:
- [Generate MAP_API_TOKEN](https://developers.google.com/maps/documentation/javascript/get-api-key#:~:text=Go%20to%20the%20Google%20Maps%20Platform%20%3E%20Credentials%20page.&text=On%20the%20Credentials%20page%2C%20click,Click%20Close.) - Generate API key for google autocomplete api
- [Google Place Autocomplete](https://developers.google.com/maps/documentation/places/web-service/query) - learn about Autocomplete API.
- [Usage and billing](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing#query-ac-per-request) - Provide billing information.