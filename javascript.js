document.getElementById('btn').onclick = 
    function showcats() {
        document.getElementById('cat-image').innerHTML = 
            ('<img src="http://edgecats.net/' + Math.random() + '"/>');
};