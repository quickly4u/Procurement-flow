# Clerk Waitlist Setup

## Setup Instructions

1. **Get your Clerk Publishable Key:**
   - Go to [clerk.com](https://clerk.com) and sign up/sign in
   - Create a new application
   - Copy your Publishable Key from the dashboard

2. **Enable Waitlist Mode:**
   - In the Clerk Dashboard, navigate to **User & Authentication** → **Restrictions**
   - Under **Sign-up modes**, enable **Waitlist**

3. **Create `.env.local` file:**
   ```bash
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## What's Been Integrated

- ✅ `ClerkProvider` wraps the entire app in `index.tsx`
- ✅ Navbar shows "Join Waitlist" button that opens Clerk's waitlist modal
- ✅ Waitlist modal collects user emails for early access
- ✅ Environment variables properly configured in `vite.config.ts`

## Features Available

- **Waitlist Modal** - Click "Join Waitlist" button to open the modal
- **Email Collection** - Users can submit their email to join the waitlist
- **Dashboard Management** - View and manage waitlist entries in Clerk Dashboard

## How It Works

The app uses Clerk's `useClerk()` hook to access the `openWaitlist()` function:

```tsx
import { useClerk } from '@clerk/clerk-react';

function MyComponent() {
  const { openWaitlist } = useClerk();
  
  return (
    <button onClick={() => openWaitlist()}>
      Join Waitlist
    </button>
  );
}
```

## Managing Waitlist Entries

1. Go to your Clerk Dashboard
2. Navigate to **Users** section
3. Filter by waitlist status to see all entries
4. You can approve users to grant them access to your app

## Customization

You can customize the Clerk waitlist appearance in your Clerk Dashboard under:
- **Customization** → **Theme** → Customize colors, fonts, and layout
- **User & Authentication** → **Restrictions** → Configure waitlist settings
