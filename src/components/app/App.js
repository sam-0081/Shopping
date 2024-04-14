import Header from "../header/Header";

import AppRoutes from "../routes/Routes";
import ModalContent from "../modal/ModalContent";

function App() {
    return (
        <div className="App">
            <>
                <ModalContent/>
                <Header/>
                <AppRoutes/>
            </>
        </div>
    );
}

export default App;
