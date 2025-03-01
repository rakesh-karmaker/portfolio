import { PrimaryBtn } from "@/components/ui/btns/Btns";

import "./notFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <p className="code">404</p>
        <div className="not-found-container">
          <p className="name">Page Not Found</p>
          <p className="description">
            Oops... The link you clicked may be broken or the page may have been
            removed. We're sorry.
          </p>
          <PrimaryBtn link="/">Back to Home</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
