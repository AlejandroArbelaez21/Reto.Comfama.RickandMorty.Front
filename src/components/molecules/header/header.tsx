import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { FormControl, IconButton, InputLabel, NativeSelect, TextField } from "@material-ui/core";

const Header = (props: any) => {
  return (
    <header className="m-header m-header-open m-header-shadow m-header__hide-mobile">
      <div className="m-header__container false">
        <div className="m-header__cover">
          <a
            href="/"
            rel="nofollow noreferrer"
            className="gtmMenuTransLogoComfama"
          >
            <img
              loading="lazy"
              className="m-header__cover__img gtmMenuTransLogoComfama"
              src="//images.ctfassets.net/gkhyeghj07ak/38O44ZEBecqm7PU7oP8iGp/9e0fc999340233038f84d36d5e2bf6e4/magenta.svg"
              alt="logo-magenta"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
