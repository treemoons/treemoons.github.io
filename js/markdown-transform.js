

			function fireKeyEvent(element, evtType, keyChar) {
				element.focus();
				var KeyboardEventInit = {key:'A', code:keyChar, location:0, repeat:false, isComposing:false};
				var evtObj = new KeyboardEvent(evtType, KeyboardEventInit);
				element.dispatchEvent(evtObj);
			}

			var textarea = document.querySelector('.gt-header-textarea');
			var objInput =textarea;
				objInput.addEventListener('keydown', function (e) {
						objInput.value += e.key;
				}, false);

			fireKeyEvent(objInput,"keydown","KeyA");


var cssHighLight =`/*

github.com style (c) Vasily Polovnyov <vast@whiteants.net>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #333;
  background: #f8f8f8;
  -webkit-text-size-adjust: none;
}

.hljs-comment,
.hljs-template_comment,
.diff .hljs-header,
.hljs-javadoc {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.css .rule .hljs-keyword,
.hljs-winutils,
.javascript .hljs-title,
.nginx .hljs-title,
.hljs-subst,
.hljs-request,
.hljs-status {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-hexcolor,
.ruby .hljs-constant {
  color: #008080;
}

.hljs-string,
.hljs-tag .hljs-value,
.hljs-phpdoc,
.hljs-dartdoc,
.tex .hljs-formula {
  color: #d14;
}

.hljs-title,
.hljs-id,
.scss .hljs-preprocessor {
  color: #900;
  font-weight: bold;
}

.javascript .hljs-title,
.hljs-list .hljs-keyword,
.hljs-subst {
  font-weight: normal;
}

.hljs-class .hljs-title,
.hljs-type,
.vhdl .hljs-literal,
.tex .hljs-command {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-tag .hljs-title,
.hljs-rules .hljs-property,
.django .hljs-tag .hljs-keyword {
  color: #000080;
  font-weight: normal;
}

.hljs-attribute,
.hljs-variable,
.lisp .hljs-body {
  color: #008080;
}

.hljs-regexp {
  color: #009926;
}

.hljs-symbol,
.ruby .hljs-symbol .hljs-string,
.lisp .hljs-keyword,
.clojure .hljs-keyword,
.scheme .hljs-keyword,
.tex .hljs-special,
.hljs-prompt {
  color: #990073;
}

.hljs-built_in {
  color: #0086b3;
}

.hljs-preprocessor,
.hljs-pragma,
.hljs-pi,
.hljs-doctype,
.hljs-shebang,
.hljs-cdata {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.diff .hljs-change {
  background: #0086b3;
}

.hljs-chunk {
  color: #aaa;
}
`