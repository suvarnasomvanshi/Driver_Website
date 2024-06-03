import { Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pdfjs } from "react-pdf";
// import components

//  import Pages

import { AboutUs } from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import { BrochuresAndCollateral } from "./Pages/BrochuresAndCollaterals";
import { Carrers } from "./Pages/Carrers";
import { Clients } from "./Pages/Clients";
import { ContactUs } from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery";
import { Homepage } from "./Pages/Homepage";
import { Integration } from "./Pages/Integration";
import Partners from "./Pages/Partners";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import Products from "./Pages/Products";
import { TermsOfUse } from "./Pages/TermsOfUse";
import UniqueBlog from "./Pages/UniqueBlog";
import { UniqueJob } from "./Pages/UniqueJob";
import { useEffect } from "react";
import SupportService from "./Pages/SupportService";
import Images from "./Pages/Images";
import { Toaster } from "react-hot-toast";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="App  w-screen relative"
    >
      <Routes>
        {/*  unique IDS */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/integration" element={<Integration />} />
        {/* <Route path='/c' element={<SupportService />} /> */}
        <Route
          path="/brochuresandcollaterals"
          element={<BrochuresAndCollateral />}
        />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/careers/:id" element={<UniqueJob />} />
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<UniqueBlog />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/gallery/:id" element={<Images />}></Route>
        <Route path="/support" element={<SupportService />}></Route>
        <Route path="/partners" element={<Partners />}></Route>
        <Route path="/products/:type" element={<Products />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
