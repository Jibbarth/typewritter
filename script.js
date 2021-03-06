var selectors = 'input:textbox, textarea, .ql-editor, .editable, .navigationFocus, [role="textbox"], [role="combobox"]';

var sounds = {
    "space1" : "sound/space.mp3",
    "space2" : "sound/space-new.mp3",
    "backspace" : "sound/backspace.mp3",
    "return" : "sound/return.mp3",
    "return-new" : "sound/return-new.mp3",
    "key1" : "sound/key-01.mp3",
    "key2" : "sound/key-02.mp3",
    "key3" : "sound/key-03.mp3",
    "key4" : "sound/key-04.mp3",
    "key-new1" : "sound/key-new-01.mp3",
    "key-new2" : "sound/key-new-02.mp3",
    "key-new3" : "sound/key-new-03.mp3",
    "key-new4" : "sound/key-new-04.mp3",
    "key-new5" : "sound/key-new-05.mp3"
}

var types = ['button', 'submit', 'reset', 'hidden', 'checkbox', 'radio'];
jQuery.extend(jQuery.expr[':'], {
    textbox: function (elem) {
       return jQuery.inArray(elem.type, types) === -1
    }
});

$(function() {
    listenTap();
});

/**
 * Register event on a list of input
 */
function listenTap()
{
    $body = $('body');

    $body.on('focus', selectors, function(e) {
        play('return-new');
    });

    $body.on('keydown', selectors, function(e){
        var code = e.keyCode ? e.keyCode : e.which;
        console.log(code);
        var key = getKeyForCode(code);
        play(key);
    })
}

/**
 * Play song for a given key
 * @param string key
 */
function play(key) {
    var audio = new Audio(chrome.runtime.getURL(sounds[key]));
    audio.play();
}

/**
 * Get Key for a code corresponding to a keydown
 * @param int code
 */
function getKeyForCode(code) {
    var key;
    switch(code) {
        case 13: // enter
            key = "return";
            break;
        case 32:  // space
            var random = Math.floor((Math.random()*2)+1);
            key = "space" + random;
            break;
        case 8: // backspace
        case 9: //tab
            key = "backspace";
            break;
        default: // all other key
            var random = Math.floor((Math.random()*4)+1);
            key = "key" + random;
            break;
    }
    return key;
}
