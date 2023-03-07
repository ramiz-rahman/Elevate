import "./App.css";
import { Paper } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import { CssBaseline } from "@mui/material";
import Overview from "./components/organisms/Overview";

function App() {
  return (
    <div className="App">
      <CssBaseline enableColorScheme />
      <Paper elevation={2} component="aside" className="App__Nav">
        <Sidebar />
      </Paper>
      {/* <div className="App__Main"> */}
      <header className="App__Main__Header">
        <h2>Elevation United</h2>
      </header>
      <main className="App__Main__Body">
        This is the main app container
        <Overview />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
          eos aut eius? Nobis culpa alias sint quae ipsam, amet voluptatem
          soluta totam veritatis velit. Possimus inventore nisi repudiandae
          nihil.
        </p>
      </main>
      <footer className="App__Main__Footer">
        Made with <span>❤️</span> by <a>Ramiz Rahman</a>
      </footer>
      {/* </div> */}
    </div>
  );
}

export default App;
