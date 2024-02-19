import "../part3.css";
export default function Part3() {
  return (
    <div className="part3">
      <div className="logos-grid">
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c322eb71370679b584eec0_client-06.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c322af0694ddc8ff201df8_client-05.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c325960abfc6e178b90d8c_client-09.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c320b96bbf6bbb838860fc_client-03.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c320470e54aa49a38feda4_client-02.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c322236bc1863cccdcc192_client-04.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c31ec50da86da1f786b795_client-01.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c32606573b003dd992ea64_client-10.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c3236335ebb422b4937662_client-08.svg"
          alt=""
        />
        <img
          className="logos-grid-item"
          src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c3231aaefffbbf238a0347_client-07.svg"
          alt=""
        />
      </div>

      <div className="blogs">
        <div className="title-wrapper">
          <h3>Take a look at our latest blogs</h3>
          <h5>
            Praesent tristique risus a neque sollicitudin non accumsan justo
            mattis.
          </h5>
        </div>

        <div className="blog-posts">
          <div className="blog1">
            <img
              className="blog-image"
              src="https://assets-global.website-files.com/65bf8f4d13cac761007c5415/65c7a063d9f74852724b1cb3_blog-01.jpg"
              alt=""
            />
            <div className="blog-category">Business</div>
            <div>February 7, 2024</div>
            <h4>How to update for the latest fashion in every season</h4>
          </div>
          <div className="blog2">
            <img
              className="blog-image"
              src="https://assets-global.website-files.com/65bf8f4d13cac761007c5415/65c329e9f48c06835bf19788_blog-02.jpg"
              alt=""
            />
            <div className="blog-category">Personal</div>
            <div>February 17, 2024</div>
            <h4>How to update for the latest fashion in every season</h4>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-left">
          <h4>
            For 10+ years, we've crafted brand magic through graphic design and
            websites. MinFolio is on the lookout for creative minds.
          </h4>
          <h1>Say hi!</h1>
          <br />
          <a href="#">info@gmail.com</a>
          <br />
          <a href="#">+111222333</a>
        </div>

        <div className="footer-right">
          <div className="footer-pages">
            <h3>Pages</h3>
            <a href="">Home</a>
            <br />
            <a href="">About Us</a>
            <br />
            <a href="">Projects</a>
            <br />
            <a href="">Blogs</a>
            <br />
            <a href="">Contact Us</a>
          </div>

          <div className="footer-templates">
            <h3>Template Info</h3>
            <a href="">Style Guide</a>
            <br />
            <a href="">Licenses</a>
            <br />
            <a href="">Changelog</a>
          </div>
        </div>
      </div>
      <div className="rights">
        <p>© All rights reserved by Flowsark. Powered by Webflow.</p>
        <div className="footer-social">
          <a href="#">
            {" "}
            <img
              src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c34599dffef8b8405bdc44_facebook.svg"
              alt=""
            />{" "}
          </a>
          <a href="#">
            {" "}
            <img
              src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c34599954810fa404b42f2_twitter-x.svg"
              alt=""
            />{" "}
          </a>
          <a href="#">
            {" "}
            <img
              src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c34599c4f77d34e5c7edbe_linkedin.svg"
              alt=""
            />{" "}
          </a>
          <a href="#">
            {" "}
            <img
              src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c3459919f6ebf408aaaea0_instagram.svg"
              alt=""
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
