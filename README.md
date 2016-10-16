[![Build Status](https://travis-ci.org/adeira/connector-frontend.svg?branch=master)](https://travis-ci.org/adeira/connector-frontend)

```
bower install
npm install

polymer build
```

Run tests locally:
```
npm run-script testLocal
```

Run tests on Sauce Labs cluster (`SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables required):
```
npm run-script testSauce
```

If you want to test this application locally on your mobile phone I suggest [Ngrok](https://ngrok.com/). You can create secure tunnel to localhost like this:
```
./ngrok http 127.0.0.1:80
```

Application is after every successful build deployed to the Amazon AWS S3 bucket (because it's just static frontend).

[http://adeira-frontend.s3-website.eu-central-1.amazonaws.com/](http://adeira-frontend.s3-website.eu-central-1.amazonaws.com/)
