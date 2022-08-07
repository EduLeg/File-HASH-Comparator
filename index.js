
var HASHArray = [];

var file1 = document.getElementById('file1');
    file1.addEventListener('change', function(e) {
        var reader = new FileReader();
        reader.onload = function(e) {
            
            var encrypted = CryptoJS.SHA256( e.target.result );

            var p = document.getElementById('file1HASH');
            p.innerHTML = encrypted;

            var imgTag = document.getElementById('file1Img');
            imgTag.src = URL.createObjectURL(file1.files[0]);

            HASHArray[0] = encrypted.toString();;    

        }
        reader.readAsText(file1.files[0]);
});

var file2 = document.getElementById('file2');
file2.addEventListener('change', function(e) {
    var reader = new FileReader();

    reader.onload = function(e) {
        
        var encrypted = CryptoJS.SHA256( e.target.result );

        var p = document.getElementById('file2HASH');
        p.innerHTML = encrypted;

        var imgTag = document.getElementById('file2Img');
        imgTag.src = URL.createObjectURL(file2.files[0]);

        HASHArray[1] = encrypted.toString();

    }
    
    reader.readAsText(file2.files[0]);
});

document.getElementById('compare').addEventListener('click', function(e) {
    if(HASHArray[0] == HASHArray[1]) {
        alert('Files are the same');
    } else {
        alert('Files are different');
    }
});