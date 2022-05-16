import Keyboard from 'simple-keyboard';
import { style } from './style';

export function keyboard(node, value) {
  // Keyboard, Options
  let keyboard = null;
  const options = {
    theme: null,
    customTheme: null,
    viewportTheme: null,
    offsetWidth: 'auto',
    layout: {},
    display: {},
  };

  const parentPage = document.querySelector('.retail');
  const fixedPage = node.getRootNode().children[2];

  function handleKeyboard() {
    value = node.value;
    keyboard = new Keyboard({
      onInit: () => handleKeyboardLayout(),

      onChange: value => node.dispatchEvent(new CustomEvent('keyboard:change', {detail: value})),

      onRender: () => {
        const thisKeyboard = document.querySelector('.simple-keyboard');
        const thisKeyboardHeight = thisKeyboard.offsetHeight;

        // Handle Regular Keyboard
        options.theme === 'regular' ? handleRegularKeyboard(thisKeyboardHeight) : '';

        // Handle Numeric keyboard width
        options.theme === 'numeric' ? handleNumericKeyboardWidth(options.offsetWidth) : '';
        
        // Scroll To ipnput
        // NOTE: This does not work
        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = node.getBoundingClientRect();
        const offset = (elemRect.top - bodyRect.top);

        // window.scroll(0, offset);
      },
      
      onKeyPress: button => onKeyPress(button)
    });

    keyboard.setOptions({
      disableButtonHold: true,
      useButtonTag: true,
      preventMouseDownDefault: true,
      autoUseTouchEvents: true,
      theme : `hg-theme-default ${options.customTheme} hg-theme-${options.theme} hg-theme-${options.viewportTheme}`,
      layout: options.layout,
      display: options.display,
      width: options.offsetWidth
    });

    keyboard.setInput(value);
  }

  // Keyboard Theme
  function handleKeyboardLayout() {
    const thisKeyboard = document.querySelector('.simple-keyboard');
    // Inject layout
    thisKeyboard.innerHTML = style;

    // Keyboard Theme
    const keyboardTheme = node.getAttribute('keyboard:theme');
    options.theme = keyboardTheme;

    // Keyboard Regular and Fixed layout
    if (options.theme === 'regular' || options.theme === 'fixed') {
      options.layout = {
        default: [
          'q w e r t y u i o p {bksp}',
          'a s d f g h j k l {enter}',
          '{shift} z x c v b n m , . {shift}',
          '{alt} {space} {altright} {downkeyboard}'
        ],
        shift: [
          'Q W E R T Y U I O P {bksp}',
          'A S D F G H J K L {enter}',
          '{shiftactivated} Z X C V B N M , . {shiftactivated}',
          '{alt} {space} {altright} {downkeyboard}'
        ],
        alt: [
          '1 2 3 4 5 6 7 8 9 0 {bksp}',
          `@ # $ & * ( ) ' " {enter}`,
          '{shift}  % - + = / ; : ! ? {shift}',
          '{default} {space} {default} {downkeyboard}'
        ],
      };

      options.display = {
        '{alt}': '.?123',
        '{shift}': '⇧',
        '{shiftactivated}': '⇧',
        '{enter}': 'return',
        '{bksp}': '⌫',
        '{altright}': '.?123',
        '{downkeyboard}': '↓',
        '{space}': ' ',
        '{default}': 'ABC',
      };

      const intViewportWidth = window.innerWidth;
          
      if (intViewportWidth >= 1024) {
        options.viewportTheme = 'large';
      } else {
        options.viewportTheme = 'small';
      }

      options.customTheme = 'hg-theme-ios';
    }

    // Keyboard Numeric Layout
    if (options.theme === 'numeric') {
      options.layout = {
        default: [
          '1 2 3',
          '4 5 6',
          '7 8 9',
          '* 0 #',
          '. {enter} {bksp}'
        ]
      };

      options.display = {
        '{enter}': 'enter',
        '{bksp}': 'backspace',
      };
    }
  }

  // Regular Keyboard Functionality
  function handleRegularKeyboard(height) {
    const css = `height: calc(100% - ${height}px); overflow: auto;`;

    // Handles Document Page
    parentPage.style = css;
    
    // Check if page exists
    if (fixedPage) fixedPage.style = css;
  }

  // Default width 100% or set width
  function handleNumericKeyboardWidth(width) {
    const thisKeyboard = document.querySelector('.simple-keyboard');
    const keyboardWidth = node.getAttribute('keyboard:offsetWidth');

    const setWidth = `calc(100% - ${keyboardWidth}px)`; // 20px is padding

    const css = keyboardWidth ? `width: ${setWidth};` : `width: ${width};`;
    
    thisKeyboard.style = css;
  }

  function onKeyPress(button) {
    if (button.includes('{') && button.includes('}')) {
      handleLayoutChange(button);
    }
  }

  function handleLayoutChange(button) {
    const currentLayout = keyboard.options.layoutName;
    let layoutName;

    switch (button) {
      case '{shift}':
      case '{shiftactivated}':
      case '{default}':
        layoutName = currentLayout === 'default' ? 'shift' : 'default';
        break;

      case '{alt}':
      case '{altright}':
        layoutName = currentLayout === 'alt' ? 'default' : 'alt';
        break;

      case '{smileys}':
        layoutName = currentLayout === 'smileys' ? 'default' : 'smileys';
        break;

      default:
        break;
    }
    
    // Set coresponding layout
    if (layoutName) keyboard.setOptions({ layoutName: layoutName,});
  }

  function handleDestroy() {
    // Reset keyboard custom widths
    const thisKeyboard = document.querySelector('.simple-keyboard');
    const resetWidthCss = `width: ${options.offsetWidth};`;

    thisKeyboard.style = resetWidthCss;

    const css = 'height: 100%;';
    if (parentPage){
      parentPage.style = css;
    }
    if (fixedPage) {
      fixedPage.style = css;
    }
    return keyboard && keyboard.destroy();
  }

  // Keyboard Focused
  node.addEventListener('focus', handleKeyboard);

  // Keyboard Defocused
  node.addEventListener('blur', handleDestroy);


  return {
    update(input) {
      keyboard && keyboard.setInput(input);
    }
  };
}
