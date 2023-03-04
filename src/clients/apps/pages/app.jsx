import viteLogo from '@img/logo/vite.svg';
import reactLogo from '@img/logo/react.svg';
import netcoreLogo from '@img/logo/netcore.svg';
import '@assets/css/app.css';

function App(props) {
  const { Component, editCode } = props;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0" target="_blank" rel="noreferrer">
          <img src={netcoreLogo} className="logo react" alt="Dotnet core logo" />
        </a>
      </div>
      <h1>Vite + React + Dotnet Core</h1>

          <div className="container">
            <div className="row">
                <div className="col-lg">
                    <div>
                        <Component />
                        <p>
                            Edit <code>{editCode}</code> and save to test HMR
                        </p>
                    </div>
                </div>
            </div>
        </div>
      <p className="read-the-docs">
        Click on the Vite, React and Dotnet Core logos to learn more
      </p>
    </div>
  )
}

export default App
