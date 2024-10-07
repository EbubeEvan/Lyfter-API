# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## How to deploy this to vercel

According to the recommendations from 

[Expo Router API Routes Documentation](https://docs.expo.dev/router/reference/api-routes/), the following changes need to be made:

1. In `package.json`, add the following line: 
   ```json
   "vercel-build": "expo export -p web"
   ```

2. Create a file named `api/index.ts`.
3. Don't forget to add the environment variables `DATABASE_URL` and `STRIPE_SECRET_KEY` to Vercel
   
After making these changes, you can proceed to deploy to Vercel.
