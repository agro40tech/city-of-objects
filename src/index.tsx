import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "00-App/App";
import { Provider } from "react-redux";
import { store } from "05-Shared/lib/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
