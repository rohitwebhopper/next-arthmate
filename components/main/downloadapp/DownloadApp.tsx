import classes from "./download.module.css";
import mobiles from "@/assets/images/2.png";
import googleplay from "@/assets/images/Google Play.png";
import appstore from "@/assets/images/App Store.png";

import Image from "next/image";

export default function DownloadApp() {
  return (
    <div className={classes.containerfluid}>
      <div className={classes.container}>
        <div className={classes.containerbox}>
          <div>
            <div className={classes.dh1}>
              <div data-aos="fade-right">
                <div>Start your investment</div>
              </div>
            </div>
            <div className={classes.dh2}>
              <div data-aos="fade-right">
                <div>journey with Arthmate Direct</div>
              </div>
            </div>
            <div className={classes.mapp}>
              <div data-aos="fade-right">
                <div className={classes.app}>Download our app today</div>
              </div>
            </div>
            <div className={classes.appflex}>
              <div data-aos="fade-right">
                <div className={classes.google}>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.arthmatedirect&hl=en_IN"
                    target="_blank"
                  >
                    <Image src={googleplay} alt="Google Play Store" />
                  </a>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className={classes.appstore}>
                  <a
                    href="https://apps.apple.com/in/app/arthmate-direct/id6449036566"
                    target="_blank"
                  >
                    <Image src={appstore} alt="Apple Store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mdiv}>
          <div data-aos="flip-right">
            <div className={classes.box}>
              <Image src={mobiles} height={459} alt="404" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
