import Styles from "../TextPart.module.css";

export default function TextPart({ className }) {
  console.log("hi from part 2");
  return (
    <div className={`${className} ${Styles.textWrapper}`}>
      <h2 className={`${Styles.text} `}>
        We are here with young talents to craft your web appearance.
      </h2>
      <div className={`${Styles.about} `}>
        <div className={`${Styles.aboutItem} `}>
          <h4>120m+</h4>
          <p>
            Combined VC investment in products we’ve helped our partners design.
          </p>
        </div>
        <div className={`${Styles.aboutItem} `}>
          <h4>40+</h4>
          <p>Design awards from Webby, &nbsp;Awwwards, Adobe, Behance</p>
        </div>
        <div className={`${Styles.aboutItem} `}>
          <h4>90%</h4>
          <p>of clients are coming back to us for a second project</p>
        </div>
      </div>
      <div className={`${Styles.serviceList} `}>
        <div className={`${Styles.serviceListItems} ${Styles.serviceListAnim}`}>
          <div className={`${Styles.serviceItem} `}>UX</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Illustration</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Web</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Branding</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Prototyping</div>
          <div className={`${Styles.serviceDivider} `}></div>
        </div>
        <div className={`${Styles.serviceListItems} ${Styles.serviceListAnim}`}>
          <div className={`${Styles.serviceItem} `}>UX</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Illustration</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Web</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Branding</div>
          <div className={`${Styles.serviceDivider} `}></div>
          <div className={`${Styles.serviceItem} `}>Prototyping</div>
          <div className={`${Styles.serviceDivider} `}></div>
        </div>
      </div>
    </div>
  );
}
