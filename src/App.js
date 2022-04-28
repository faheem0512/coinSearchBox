import "./styles.css";
import SearchPage from "./screens/searchPage";

export default function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

/*
Part 1 (Functionality)

Entering the name of crypto currency in search should populate results in the list.
The list item should show the name and percent change of an asset.
Search API: https://www.coinbase.com/api/v2/assets/search?query=””&limit=10
API response type
{
    data: [
        { id: string, name: string, percent_change: number }
    ]
}

“+” should appear before change if change is positive, “-” if change is negative
Change should not appear if it is 0 (stable coin)
Handle the loading state for showing loader in search input while data is coming from API.
Part 2 (Styling)

The styling should look close to the one shown in the GIF.
Position the loader in search input like shown in GIF.
Red = rgb(207, 32, 47);
Green = rgb(9, 133, 81);
Loader SVG
  
 <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
 >
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
</svg>

Part 3 (Animation)

Animate loader inside search input.

Part 4 (Performance)

The input should be debounced to avoid unnecessary API calls.


*/
