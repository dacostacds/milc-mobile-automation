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
    '../test/specs/login*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'ios',
        'appium:platformVersion': '16.4',
        'appium:deviceName': 'iPhone 14',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/ios/One Dev.app'),
        'appium:autoAcceptAlerts': 'true'
    }
];

exports.config = config;