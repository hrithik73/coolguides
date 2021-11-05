import 'dotenv/config'

export default ({ config }) => {
 const appConfig = ({
  ...config,
  version: process.env.VERSION,
  //override anything you want
  extra: {
   apiKey: process.env.API_KEY,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECT_ID,
   storageBucket: process.env.STORAGE_BUCKET,
   messagingSenderId: process.env.MESSAGING_SENDER_ID,
   appId: process.env.APP_ID,
   measurementId: process.env.MEASUREMENT_ID
  }
 });
 return appConfig;
}
