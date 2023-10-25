import Carousal from "./comp/Carousal";
import Aboutus from "./comp/Beforeftr";
import Bestseller from "./comp/Bestseller"
import Popular from "./comp/Popular";
import FandQ from "./comp/FandQ";
import Header from "./Header";

function Divider() {
  return (
    <>
      <section className=" section-bubble1 mt-0">
        <Header/>
        <Carousal />
      </section>
      <section className="py-0 section-bubble2">
        <>
          <Bestseller/>
        </>
      </section>
      <section className="py-0 section-bubble3">
        <>
          <Popular />
        </>
      </section>
      <section className="py-0 section-bubble4">
        <>
          <Aboutus />
        </>
      </section>
      <section className="py-0 section-bubble5">
        <>
          <FandQ/>
          
          </>
      </section>
    </>
  );
}

export default Divider;