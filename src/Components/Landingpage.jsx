import React, { Suspense } from 'react'
import "../Components/Landingpage.css"
import logo from "../Images/logo.png"
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Emodel } from '../Components/Models/Emodel';
import { NavLink } from 'react-router-dom';
import CanvasLoader from './Models/Loader';

const Landingpage = () => {
    return (
        <div id='body'>

            <div id="nav">
                <img src={logo} alt={logo} id='logo' />
                <h3><b>CRYPTO </b>VERSE*</h3>
                <button>REALTIME</button>
            </div>

            <div id="loop">

                <h1><b>CRYPTO</b> VERSE IS THE <b><i>BEST</i></b> <span>PLACE</span> FOR <span><i>INSIGHTS. </i></span>
                </h1>
                <h1><b>CRYPTO</b> VERSE IS THE <b><i>BEST</i></b> <span>PLACE</span> FOR <span><i>INSIGHTS. </i></span>
                </h1>
                <h1><b>CRYPTO</b> VERSE IS THE <b><i>BEST</i></b> <span>PLACE</span> FOR THE <span><i>INSIGHTS. </i></span>
                </h1>
            </div>

            <div id='info1'>
                <h3>WELCOME TO CRYPTO VERSE,<br /> GET LASTEST INFORMATION AND INSIGHTS ON THE EVER-EVOLVING WORLD OF CRYPTOCURRENY. <br />WE COVER A WIDE RANGE OF INFORMATION ABOUT CRYPTO.</h3>
            </div>


            <div id='button'>
                <NavLink to="/homepage">ENTER THE CRYPTO VERSE</NavLink>
            </div>

            <div id='eth'>
                <Canvas frameloop='demand'
                    shadows
                    dpr={[1, 2]}
                    camera={{ fov: 1, zoom: 1.6 }}>


                    <Stage environment="city" />

                    <Suspense fallback={<CanvasLoader />}>
                        <Emodel />

                        <OrbitControls
                            enableZoom={false}
                            autoRotate={true}
                            autoRotateSpeed={10}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2} />
                    </Suspense>



                    <hemisphereLight intensity={0.15} groundColor='black' />

                    <spotLight
                        position={[0, 1, 0]}
                        angle={0.12}
                        penumbra={1}
                        intensity={4}
                        castShadow
                        shadow-mapSize={1024}
                    />
                </Canvas>
            </div>

            <div id='info2'>
                <h3>CRYPTO VERSE USES A REAL TIME API TO GET THE LASTEST INSIGHTS. <br />EVERY INFORMATION SHOWN IS UP-TO-DATE & ACCORDING TO MARKET.</h3>
            </div>



        </div>
    )
}

export default Landingpage;
