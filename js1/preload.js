String.toInitialWebPath()=function() {
	return `treemoons.github.io`
}
''.toInitialWebPath()

var charsToReplace = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function replaceChar(char) {
	return charsToReplace[char] || char;
}
console.log('<p> nia s </p>'.replace(/[&<>]/g, replaceChar))
new Date().formatDate()