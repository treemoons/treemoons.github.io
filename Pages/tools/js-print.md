
```js
  function doPrint() {
        bdhtml=window.document.body.innerHTML;// cache body
        sprnstr="<!--startprint-->"; // start signal
        eprnstr="<!--endprint-->"; // end signal
        prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17); // the 17 is length of "<!--startprint-->"
        prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));
        window.document.body.innerHTML=prnhtml;
        window.print();
        window.document.body.innerHTML=bdhtml; //recovery body
}
```
