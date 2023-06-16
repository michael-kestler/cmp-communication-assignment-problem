module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],

  plugins: [
		require('volar-service-vetur').default(),
	],
}
