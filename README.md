react-combined-providers

A utility for combining multiple React Context Providers into a single component. This helps to keep your provider hierarchy clean and manageable.

Installation

You can install the package using npm or yarn:

```bash
npm install react-combined-providers
# or
yarn add react-combined-providers
```

Usage

Wrap your application with CombinedProviders, passing an array of your context providers:

```tsx
import CombinedProviders from "react-combined-provider";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { StoreProvider } from "./contexts/StoreContext";

const App = () => (
  <CombinedProviders providers={[ThemeProvider, AuthProvider, StoreProvider]}>
    <YourApp />
  </CombinedProviders>
);

export default App;

Why use react-combined-provider?

🛠 Simplifies context management – No more deeply nested providers.

🚀 Easy to extend – Just add more providers to the array.

✅ Lightweight & flexible – Works with any React context providers.

License

This project is licensed under the MIT License.