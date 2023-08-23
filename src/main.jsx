import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Canvas} from "@react-three/fiber";
import {Leva} from "leva";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Leva />
        <Canvas
            shadows
            camera={ {
                fov: 60,
                near: 0.1,
                far: 200,
                position: [ - 8, 3, 10 ]
            } }
        >
            <App/>
        </Canvas>
    </React.StrictMode>,
)
