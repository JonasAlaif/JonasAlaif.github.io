document.write = (function() {
    var cached_function = document.write;
    return function(stringAppend) { 
        if(stringAppend.endsWith('" target="_blank"><br><img src="https://www.freevisitorcounters.com/ctrimg/counter-4.png" border="0" class="counterimg"></a>')) { return; }
        return cached_function.apply(this, [stringAppend]);
        };
    })();
String.prototype.trim = function() {
    if(this == ' ') return ' ';
    return this.replace(/^\s+|\s+$/g, '');
  };