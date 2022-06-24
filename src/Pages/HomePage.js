import React, { Suspense, lazy } from "react";
import Loader from '../Components/Loader'

//components
import HomeFooter from "../Components/HomeFooter";
import HomeSlider from "../Components/HomeSlider";

// const HomeFooter = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("../Components/HomeFooter")));
//   });
// });
// const HomeSlider = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("../Components/HomeSlider")));
//   });
// });


const HomePage = () => {
  return (
    <div className="homepage__container">
      {/* <Suspense fallback={<div>
        <Loader />
        </div>}> */}
        <HomeSlider />
        <HomeFooter />
      {/* </Suspense> */}
    </div>
  );
};

export default HomePage;
