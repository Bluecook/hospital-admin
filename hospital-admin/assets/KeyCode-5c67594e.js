const E={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(N){const{keyCode:e}=N;if(N.altKey&&!N.ctrlKey||N.metaKey||e>=E.F1&&e<=E.F12)return!1;switch(e){case E.ALT:case E.CAPS_LOCK:case E.CONTEXT_MENU:case E.CTRL:case E.DOWN:case E.END:case E.ESC:case E.HOME:case E.INSERT:case E.LEFT:case E.MAC_FF_META:case E.META:case E.NUMLOCK:case E.NUM_CENTER:case E.PAGE_DOWN:case E.PAGE_UP:case E.PAUSE:case E.PRINT_SCREEN:case E.RIGHT:case E.SHIFT:case E.UP:case E.WIN_KEY:case E.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(N){if(N>=E.ZERO&&N<=E.NINE||N>=E.NUM_ZERO&&N<=E.NUM_MULTIPLY||N>=E.A&&N<=E.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&N===0)return!0;switch(N){case E.SPACE:case E.QUESTION_MARK:case E.NUM_PLUS:case E.NUM_MINUS:case E.NUM_PERIOD:case E.NUM_DIVISION:case E.SEMICOLON:case E.DASH:case E.EQUALS:case E.COMMA:case E.PERIOD:case E.SLASH:case E.APOSTROPHE:case E.SINGLE_QUOTE:case E.OPEN_SQUARE_BRACKET:case E.BACKSLASH:case E.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},a=E;export{a as K};
