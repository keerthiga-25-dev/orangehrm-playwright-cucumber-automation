module.exports = {
  default: {
    require: [
      'features/step-definitions/*.js',
      'support/*.js'
    ],
    format: ['progress']
  }
};