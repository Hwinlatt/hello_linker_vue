import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.hellolinker',
  appName: 'HelloLinker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
