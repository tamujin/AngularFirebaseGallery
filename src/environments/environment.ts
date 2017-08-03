// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase : {
    apiKey: 'AIzaSyB0K2O1y-jBbRYzZeDwW4thcIY02xirfVA',
    authDomain: 'angular-gallary-6730c.firebaseapp.com',
    databaseURL: 'https://angular-gallary-6730c.firebaseio.com',
    projectId: 'angular-gallary-6730c',
    storageBucket: '',
    messagingSenderId: '813533433188'
  }
};
