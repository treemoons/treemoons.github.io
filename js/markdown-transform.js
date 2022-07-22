

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

