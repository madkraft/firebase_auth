(function(firebase) {

    var config = {
        apiKey: "AIzaSyDwsp5VORpQitxKuIvGI6ISvWaHCDbunUM",
        authDomain: "authentication-aa53d.firebaseapp.com",
        databaseURL: "https://authentication-aa53d.firebaseio.com",
        storageBucket: "authentication-aa53d.appspot.com",
        messagingSenderId: "1000314685511"
    };
    firebase.initializeApp(config);

    var auth = firebase.auth();


    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnLogout = document.getElementById('btnLogout');
    var btnSignUp = document.getElementById('btnSignUp');

    btnLogin.addEventListener('click', function (event) {
        // auth.signInAnonymously();
        var email = txtEmail.value;
        var password = txtPassword.value;
        var promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(function (e) {
            console.error('Error', e.message);
        })
    });

    btnSignUp.addEventListener('click', function (event) {
        var email = txtEmail.value;
        var password = txtPassword.value;
        var promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(function (e) {
            console.error('Error', e.message);
        });
    })


    btnLogout.addEventListener('click', function (event) {
        auth.signOut();
    });

    auth.onAuthStateChanged(function (user) {
        console.log('', user);
        if (user) {
            btnLogout.classList.remove('hide');
        } else {
            btnLogout.classList.add('hide');
        }
    })

})(window.firebase);