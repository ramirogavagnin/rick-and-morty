module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      '@babel/plugin-proposal-optional-chaining',
      [
          'module-resolver',
          {
              alias: {
                  '@assets': '.src/assets',
                  '@components': './src/components',
                  '@containers': './src/containers',
                  '@navigator': './src/navigator',
                  '@services': './src/services',
                  '@actions': './src/store/actions',
                  '@reducers': './src/store/reducers',
                  '@constants': './src/store/constants',
                  '@themes': './src/themes',
                  '@translations': './src/themes/translations',
                  '@types': './src/types',
                  '@utils': './src/utils',
              },
          },
      ],
  ],
};