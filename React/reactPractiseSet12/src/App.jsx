// 1. Create a React app with UserContext that stores the user's information (name, email, and role).
// Create a UserProfile component that displays the user's name and email obtained from
// the UserContext using useContext. On change of the user name from the dropdown show the
// relevant name and email as shown in the screenshot below.
// 2. Create a React app with LanguageContext that stores the current language. Implement
// a Translate component that receives a key and displays the corresponding translation based on
// the language provided by the LanguageContext using useContext.
// 3. Create a React app with ThemeSwitcher component that allows the user to toggle between light
// and dark themes. Use the useContext hook to obtain the current theme from
// a ThemeContext and update it when the user switches between themes on click of the button.
// 4. Create a React app with CartTotalContext that stores the total price of items in the shopping
// cart. Implement a CartSummary component that displays the cart total obtained from
// the CartTotalContext using useContext. You can display the available cart items on the same
// page along with buttons to add or remove items from cart.
// 5. Create a React app with 3 pages using React Router. Create UserPreferencesContext that
// stores the user's preferences, such as font size and color scheme. Implement
// a PreferencesForm component with dropdown that allows the user to customize their
// preferences using the UserPreferencesContext and useContext. On changing the preferences,
// the changes should apply to the Profile and Notes page.

import { CartSummary } from "./Components/CartSummary4";
import { PreferencesForm } from "./Components/PreferencesForm5";
import { ThemeSwitcher } from "./Components/ThemeSwitcher3";
import { UserProfile } from "./Components/UserProfile1";
import { CartTotalProvider } from "./Contexts/CartTotalContext4";
import { LanguageContext } from "./Contexts/LanguageContext2";
import { ThemeProvider } from "./Contexts/ThemeContext3";
import { UserProvider } from "./Contexts/UserContext1";
import { UserPreferencesProvider } from "./Contexts/UserPreferencesContext5";

function App() {
  return (
    <>
      {/* <UserProvider>
        <UserProfile />
      </UserProvider> */}

      {/* <LanguageContext /> */}

      {/* <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider> */}

      {/* <CartTotalProvider>
        <CartSummary />
      </CartTotalProvider> */}

      <UserPreferencesProvider>
        <PreferencesForm />
      </UserPreferencesProvider>
    </>
  );
}

export default App;
