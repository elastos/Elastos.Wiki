/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
//import IconExternalLink from '@theme/IconExternalLink';

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
          to: toUrl,
        })}
      {...props}>
      {href && !isInternalUrl(href) ? (
        <span>
          {label}
          <IconExternalLink />
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

const FooterLogo = ({ sources, alt }) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer() {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer className="relative pt-100 pb-40 md:pb-100 bg-black text-white mt-150">
      {/* <div className="absolute pin-t pin-r" style={{ maxWidth: "50vw" }}>
        <img
          src="https://near.org/wp-content/themes/near-19/assets/img/neue/distortion-footer.svg?t=1600963469"
          className="locked"
          style={{ transform: "translateY(-60%)" }}
          alt=""
        ></img>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col md:w-1/4">
            <img
              src="img/logo.svg"
              className="locked"
              width="120"
              alt=""
            ></img>
            <ul className="list-reset text-24 font-black text-yellow mt-50">
              <li>
                <a
                  href="https://elastos.info/essentials-the-super-wallet/"
                  className="hover:text-white"
                >
                  Wallet
                </a>
              </li>
              <li>
                <a
                  href="https://blockchain.elastos.org/"
                  className="hover:text-white"
                >
                  ELA Explorer
                </a>
              </li>
              <li>
                <a href="https://esc.elastos.io/" className="hover:text-white">
                  ESC Explorer
                </a>
              </li>
              <li>
                <a href="https://eid.elastos.io/" className="hover:text-white">
                  EID Explorer
                </a>
              </li>
            </ul>
          </div>
          <div className="col md:w-3/4 mt-50 md:mt-0" style={{ zIndex: "1" }}>
            <ul className="list-reset flex flex-wrap -mx-20">
              <li className="mx-20">
                <a
                  href="https://twitter.com/elastosinfo"
                  className="block hover:text-twitter"
                  target="_blank"
                >
                  <span className="icon icon-36 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </span>
                  <span className="screen-reader-text">Twitter</span>
                </a>
              </li>
              <li className="mx-20">
                <a
                  href="https://discord.gg/elastos"
                  className="block hover:text-discord"
                  target="_blank"
                >
                  <span className="icon icon-36 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                    </svg>
                  </span>
                  <span className="screen-reader-text">Discord</span>
                </a>
              </li>
              <li className="mx-20">
                <a
                  href="https://cyberrepublic.org"
                  className="block hover:text-discourse"
                  target="_blank"
                  id="discourse-1"
                >
                  <span className="icon icon-36">
                    <svg
                      enableBackground="new 0 0 34 35"
                      viewBox="0 0 34 35"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 25.1c0-2.6 0-5.2 0-7.8 0-4.7 1.8-8.8 5.2-12.1 2.6-2.5 5.8-4 9.4-4.5 6.9-1.1 13.7 2.3 17.2 8.4 1.6 3 2.4 6.2 2.2 9.5-.4 4.6-2.3 8.5-5.7 11.6-2.5 2.2-5.4 3.6-8.6 4.1-.6.1-1.3.2-2 .2-5.7 0-11.4 0-17.1 0-.4 0-.5-.1-.5-.5-.1-3-.1-6-.1-8.9zm16.9-17.3c-.6 0-1.2.1-1.8.2-6.2 1.3-9.6 8.1-6.7 13.7.1.3.1.5.1.7-.5 1.6-1 3.2-1.4 4.7-.1.1-.1.3-.1.4.1.1.3 0 .4-.1 1.7-.4 3.4-.9 5.1-1.3.3-.1.6-.1.9.1 1.6.7 3.4.9 5.1.6 5.2-.8 8.9-5.7 8.1-11-.8-4.5-4.8-8-9.7-8z"></path>
                    </svg>
                  </span>
                  <span className="screen-reader-text">Forum</span>
                </a>
              </li>
              <li className="mx-20">
                <a
                  href="https://github.com/elastos"
                  className="block hover:text-github"
                  target="_blank"
                >
                  <span className="icon icon-36 ">
                    <svg
                      height="36"
                      viewBox="0 0 36 36"
                      width="36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m17.9991429 0c-9.93942861 0-17.9991429 8.058-17.9991429 18.0008571 0 7.9517143 5.15742857 14.6982858 12.3102857 17.0794286.9.1645714 1.2291429-.3908571 1.2291429-.8682857 0-.4268571-.0162857-1.5591429-.0248572-3.0608571-5.0065714 1.0868571-6.06342854-2.4137143-6.06342854-2.4137143-.81857143-2.0785715-1.99885715-2.6322857-1.99885715-2.6322857-1.63371428-1.1177143.12428572-1.0937143.12428572-1.0937143 1.806.1268571 2.75742857 1.8548571 2.75742857 1.8548571 1.60542857 2.7505714 4.2128571 1.956 5.238 1.4948572.1628571-1.1631429.6282857-1.956 1.1425714-2.406-3.9968571-.4542858-8.1985714-1.9988572-8.1985714-8.8962858 0-1.9654285.70114286-3.5717142 1.85228571-4.83-.18514285-.456-.80314285-2.28514281.17657143-4.76399996 0 0 1.51114286-.48342857 4.94999996 1.84542857 1.4357143-.39942857 2.9751429-.59914285 4.506-.606 1.5282858.00685715 3.0685715.20657143 4.5068572.606 3.4362857-2.32885714 4.944-1.84542857 4.944-1.84542857.9831428 2.47885715.3651428 4.30799996.1791428 4.76399996 1.1545715 1.2582858 1.8505715 2.8645715 1.8505715 4.83 0 6.9154286-4.2085715 8.436-8.2182857 8.8825715.6462857.5554285 1.2214285 1.6534285 1.2214285 3.3325714 0 2.4068571-.0214285 4.3482857-.0214285 4.938 0 .4817143.324 1.0414286 1.2377142.8657143 7.146-2.3845714 12.2991429-9.1277143 12.2991429-17.0768572 0-9.9428571-8.0597143-18.0008571-18.0008571-18.0008571" />
                    </svg>
                  </span>
                  <span className="screen-reader-text">GitHub</span>
                </a>
              </li>
              <li className="mx-20">
                <a
                  href="https://www.reddit.com/r/Elastos/"
                  className="block hover:text-youtube"
                  target="_blank"
                >
                  <span className="icon icon-36 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"/></svg>
                  </span>
                  <span className="screen-reader-text">Reddit</span>
                </a>
              </li>
              <li className="mx-20">
                <a
                  href="https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ"
                  className="block hover:text-youtube"
                  target="_blank"
                >
                  <span className="icon icon-36 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </span>
                  <span className="screen-reader-text">YouTube</span>
                </a>
              </li>
              <li className="mx-20">
                <a
                  href="https://www.facebook.com/elastosorg/"
                  className="block hover:text-facebook"
                  target="_blank"
                >
                  <span className="icon icon-36 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </span>
                  <span className="screen-reader-text">Facebook</span>
                </a>
              </li>
            </ul>
            <div className="row">
              <div className="col sm:w-1/3 mt-50">
                <h2 className="text-24 font-black text-blue-light">
                  Developers
                </h2>
                <ul
                  id="menu-developers-1"
                  className="footer-menu list-reset mt-5 text-16 md:text-18"
                >
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-550">
                    <a href="https://elastos.info/elastos-development/">Overview</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2801">
                    <a href="https://elastos.info/academy/">Technology</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-116">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/elastos"
                      id="github"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4720">
                    <a href="https://www.cyberrepublic.org/funding">Funding</a>
                  </li>
                </ul>
              </div>
              <div className="col sm:w-1/3 mt-50">
                <h2 className="text-24 font-black text-blue-light">
                  Community
                </h2>
                <ul
                  id="menu-community-1"
                  className="footer-menu list-reset mt-5 text-16 md:text-18"
                >
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6804">
                    <a href="https://cyberrepublic.org">Forum</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6804">
                    <a href="https://elastos.info/blog-and-news/">News</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6804">
                    <a href="https://elastos.info/ecosystem/">dApps</a>
                  </li>
                </ul>
              </div>
              <div className="col sm:w-1/3 mt-50">
                <h2 className="text-24 font-black text-blue-light">About</h2>
                <ul
                  id="menu-about-1"
                  className="footer-menu list-reset mt-5 text-16 md:text-18"
                >
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-441">
                    <a href="https://elastos.info/about/">About Us</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-441">
                    <a href="https://www.elastos.org/en/#basic">Mission</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-441">
                    <a href="https://www.elastos.org/en/#platforms">Components</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-441">
                    <a href="https://www.elastos.org/en/roadmap/">Roadmap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-14 mt-50 md:mt-100">Copyright &copy;
          {new Date().getFullYear()} <a href="https://elastos.org" className="hover:text-yellow">Elastos</a><span className="mx-10">|</span>All rights
          reserved<span className="mx-10">|</span>
          <a href="https://elastos.info/contact/" className="hover:text-yellow">
            Contact
          </a>
          <span className="mx-10">|</span>
          <a href="https://app.termly.io/document/privacy-policy/40778942-fea5-44ed-9270-4e9f77b2abc8" className="hover:text-yellow">
            Privacy Policy
          </a>
          <span className="mx-10">|</span>
          <a href="https://app.termly.io/document/cookie-policy/52769eed-243b-48e2-a1c3-77240b33e203" className="hover:text-yellow">
            Cookie Policy
          </a>
          <span className="mx-10">|</span>
          <a href="https://app.termly.io/document/disclaimer/9bd11082-b5b4-4430-8f85-cd66a3d99211" className="hover:text-yellow">
            Disclaimer
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
