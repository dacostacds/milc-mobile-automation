const {config} = require('./wdio.shared.conf');
const path = require('path');


// ====================
// Runner Configuration
// ====================    
config.port = 4723;

// ==================
// Specify Test Files
// ==================
config.specs = [
    //'../test/specs/android/feed/loginFeed*.js'
    '../test/specs/login*.js'
];

config.suites = {
    smokeFeed: [
        '../test/specs/android/feed/loginFeed*.js',
        '../test/specs/android/feed/pen/createPen*.js',
        '../test/specs/android/feed/ingredient/createIngredient*.js'
    ]
};

// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Pixel 5',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(), './app/android/one-dev-2.47.14.apk'),
        'appium:autoGrantPermissions': true
    }
];

exports.config = config;