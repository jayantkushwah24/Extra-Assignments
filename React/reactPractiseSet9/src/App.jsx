import { RenderBookApp } from "./Components/RenderBookApp2";
import { RenderEmailApp } from "./Components/RenderEmailApp1";
import { RenderFoodApp } from "./Components/RenderFoodApp3";
import { RenderVideoListingApp  } from "./Components/RenderVideoListingApp4";
import { BookContext, BookProvider } from "./Context/BookContext2";
import { EmailContext } from "./Context/EmailContext1";
import { FoodAppProvider } from "./Context/FoodAppContext3";
import { VideoListingProvider , VideoListingContext } from "./Context/VideoListingContext";
export {VideoListingContext};
export { EmailContext };

function App() {
  return (
    <>
      {/* <EmailProvider>
        <RenderEmailApp />  //Q1
      </EmailProvider> */}

      {/* <BookProvider>
        <RenderBookApp />
      </BookProvider> */}

      {/* <FoodAppProvider>
        <RenderFoodApp />
      </FoodAppProvider> */}

      <VideoListingProvider>
        <RenderVideoListingApp />
      </VideoListingProvider>
    </>
  );
}

export default App;
