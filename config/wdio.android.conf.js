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
    '../test/specs/android/feed/pen/createPen*.js'
    
];

// config.suites = {
//     smokeFeed: [
//         '../test/specs/android/feed/loginFeed*.js',
//         '../test/specs/android/feed/pen/createPen*.js'
//     ]
// };

// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Nexus 6',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(), './app/android/one-dev-2.47.14.apk'),
        'appium:autoGrantPermissions': true
    }
];

exports.config = config;