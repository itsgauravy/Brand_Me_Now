import Carousal from "./comp/Carousal";
import Aboutus from "./comp/Aboutus";
import Bestseller from "./comp/Bestseller"
import Popular from "./comp/Popular";
import FandQ from "./comp/FandQ";

function Divider() {
  return (
    <>
      <section className=" section-bubble1 mt-0">

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