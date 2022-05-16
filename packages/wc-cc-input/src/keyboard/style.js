let style = `
  <style>
    /*!
    * 
    *   simple-keyboard v2.32.75
    *   https://github.com/hodgef/simple-keyboard
    * 
    *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
    * 
    *   This source code is licensed under the MIT license found in the
    *   LICENSE file in the root directory of this source tree.
    *   
    */
    .hg-theme-default{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;overflow:hidden;touch-action:manipulation}.hg-theme-default .hg-button span{pointer-events:none}.hg-theme-default button.hg-button{border-width:0;outline:0;font-size:inherit}.hg-theme-default{font-family:"HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;background-color:#ececec;padding:5px;border-radius:5px}.hg-theme-default .hg-button{display:inline-block;flex-grow:1}.hg-theme-default .hg-row{display:flex}.hg-theme-default .hg-row:not(:last-child){margin-bottom:5px}.hg-theme-default .hg-row .hg-button-container,.hg-theme-default .hg-row .hg-button:not(:last-child){margin-right:5px}.hg-theme-default .hg-row>div:last-child{margin-right:0}.hg-theme-default .hg-row .hg-button-container{display:flex}.hg-theme-default .hg-button{box-shadow:0 0 3px -1px rgba(0,0,0,.3);height:40px;border-radius:5px;box-sizing:border-box;padding:5px;background:#fff;border-bottom:1px solid #b5b5b5;cursor:pointer;display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.hg-theme-default .hg-button.hg-activeButton{background:#efefef}.hg-theme-default.hg-layout-numeric .hg-button{width:33.3%;height:60px;align-items:center;display:flex;justify-content:center}.hg-theme-default .hg-button.hg-button-numpadadd,.hg-theme-default .hg-button.hg-button-numpadenter{height:85px}.hg-theme-default .hg-button.hg-button-numpad0{width:105px}.hg-theme-default .hg-button.hg-button-com{max-width:85px}.hg-theme-default .hg-button.hg-standardBtn.hg-button-at{max-width:45px}.hg-theme-default .hg-button.hg-selectedButton{background:rgba(5,25,70,.53);color:#fff}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=".com"]{max-width:82px}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn="@"]{max-width:60px}
    /**
     * hg-theme-default theme
     */
    .simple-keyboard.hg-theme-ios {
      margin: auto;
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-row .hg-button {
      flex-grow: 1;
      cursor: pointer;
      max-width: initial;
    }
    .simple-keyboard.hg-theme-ios .hg-row {
      display: flex;
    }
    .simple-keyboard.hg-theme-ios .hg-row:not(:last-child) {
      margin-bottom: 5px;
    }
    .simple-keyboard.hg-theme-ios .hg-row .hg-button:not(:last-child) {
      margin-right: 5px;
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default,
    .simple-keyboard.hg-theme-numeric {
      background-color: var(--retail-primary-color, #e2e2e2);
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default {
      padding: 5px;
      border-radius: 5px;
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default.hg-layout-custom {
      background-color: var(--retail-tertiary-color, #e5e5e5);
      padding: 5px;
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button,
    .simple-keyboard.hg-theme-numeric .hg-button {
      background: var(--retail-tertiary-color, #fff);
      border-bottom: 1px solid var(--retail-tertiary-color, #b5b5b5);
      color: var(--retail-text-color, #000);
    }


    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button {
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: none;
      font-weight: 400;
      font-size: 16px;
      max-width: 40px;
      min-width: 40px;
      height: 40px;
      min-height: 40px;
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button:active,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button:focus,
    .simple-keyboard.hg-theme-numeric .hg-button:active,
    .simple-keyboard.hg-theme-numeric .hg-button:focus {
      background: var(--retail-shade-color, #e4e4e4);
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-functionBtn {
      background-color: var(--retail-shade-color, #adb5bb);
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-functionBtn:active,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-functionBtn:focus {
      background-color: var(--retail-tertiary-color, #adb5bb);
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-space,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-shift,
    .simple-keyboard.hg-theme-ios.hg-theme-default
    .hg-button.hg-button-shiftactivated {
      background-color: var(--retail-tertiary-color, #ffffff);
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-space:active,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-space:focus,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-shift:active,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-shift:focus,
    .hg-button.hg-button-shiftactivated:active,
    .hg-button.hg-button-shiftactivated:focus {
      background: var(--retail-shade-color, #ffffff);
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-space {
      max-width: 480px;
      min-width: 480px;
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-enter {
      max-width: 110px;
      min-width: 90px;
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-altright,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button-back {
      min-width: 50px;
      max-width: 50px;
    }

    /**
     * Keyboard Layout styles
     */
    .simple-keyboard,
    .simple-keyboard.hg-theme-fixed {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      transition: height .2s ease-in-out;
    }

    .simple-keyboard.hg-theme-fixed,
    .simple-keyboard.hg-theme-regular {
      font-size: 20px;
    }

    .simple-keyboard.hg-theme-regular {
      position: relative;
    }

    .simple-keyboard.hg-theme-numeric {
      left: auto;
      right: 0;
      top: 0;
      width: 210px;  /* plus padding for good measure */
      display: flex;
      flex-flow: column;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      .simple-keyboard.hg-theme-numeric {
        width: 410px;
        font-size: 20px;
      }
    }

    /* Keyboard viewport styling */
    .simple-keyboard.hg-theme-large .hg-row {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }

    .simple-keyboard.hg-theme-small .hg-row {
      width: 100%;
      max-width: 100%;
    }

    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button {
      height: 50px;
      font-size: 20px;
    }
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-alt,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-altright,
    .simple-keyboard.hg-theme-ios.hg-theme-default .hg-button.hg-button-downkeyboard {
      max-width: 85px;
    }
  </style>
`;

export { style };
