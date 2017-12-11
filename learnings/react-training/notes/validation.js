var PBF = PBF || {};
PBF.Form = PBF.App.extend({

    initializeForm: function() {
        this.validation();
        this.bindEvents();
       
    },

    events: {

        "submit form": "submitHandler"
    },

    /**
     * validation: validates a form by attaching the events to inputs
     * params: none
     * return: none
     * note: to display validation mesaage set an attribute 'data-error= "msg to be shown"'
             in the html input tag
     **/


    submitHandler: function(el) {
        el.preventDefault();
        var inp = document.querySelectorAll("div input");
        console.log(inp);
        inp.forEach(function(elem, ind) {

            console.log(inp[ind].value);
            if (!(inp[ind].value)) {

                inp[ind].className = "input-txt error-border";
                var eData = inp[ind].getAttribute('data-error');
                var parentE = inp[ind].parentElement;
                var lChild = parentE.lastElementChild;
                if (lChild.tagName === "SPAN") {
                    //do nothing
                } else {
                    var nod = document.createElement("span");
                    nod.innerHTML = eData;
                    nod.setAttribute('class', 'error-validation');
                    app.appendToDOM({ element: nod, parent: parentE });
                }
            }
        });
        //console.log(inp);

        var role = document.getElementById("role");
        var parEl = role.parentElement;
        var lastChild = parEl.lastElementChild;
        selectedRole = role.options[role.selectedIndex].value;
        console.log("role="+ selectedRole);
        if (selectedRole == '') {
            role.className = "input-txt error-border";
            var eData = role.getAttribute('data-error');

            if (lastChild.tagName === "SPAN") {
                //do nothing
            } else {
                var nod = document.createElement("span");
                nod.innerHTML = eData;
                nod.setAttribute('class', 'error-validation');
                app.appendToDOM({ element: nod, parent: parEl });
            }
        } else {
            role.className = "input-txt success-border";
            if (lastChild.tagName === "SPAN") {
                lastChild.remove();
            }
        }

    },

    validation: function() {
        var inputs = this.getElementsByQuery("div input");
        inputs.forEach(function(elementInput, index) {
            var app = this;
            inputs[index].addEventListener('blur', validate);
            inputs[index].addEventListener('keyup', validate);
        });

        function validate(e) {

            var storedId = e.target.getAttribute('id');

            console.log(storedId);
            var inputValue = e.target.value;
            //console.log(inputValue);
            var ckName = /^[A-Za-z]{2,20}/,
                ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                ckOracleID = /^[0-9]{4,10}$/,
                ckPhone = /^[1-9]\d{9}/,
                ckLocation = /^[A-Za-z]{2,20}$/,
                ckPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;


            function noError(e) {

                e.target.className = "input-txt success-border";
                var parentEl = e.target.parentElement;
                var lastChild = parentEl.lastElementChild;
                if (lastChild.tagName === "SPAN") {
                    lastChild.remove();
                }
            } //EOF noError

            function errorThere(e) {
                e.target.className = "input-txt error-border";
                var errorData = e.target.getAttribute('data-error');
                var parentEl = e.target.parentElement;
                var lastChild = parentEl.lastElementChild;
                if (lastChild.tagName === "SPAN") {
                    //do nothing
                } else {
                    var node = document.createElement("span");
                    node.innerHTML = errorData;
                    node.setAttribute('class', 'error-validation');
                    app.appendToDOM({ element: node, parent: parentEl });
                }

            } //EOF errorThere

            if (!(e.target.value)) {

                errorThere(e);

            } else {
                if (storedId == 'fullName') {

                    if (ckName.test(inputValue)) {
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'oracleId') {

                    if (ckOracleID.test(inputValue)) {
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'email') {

                    if (ckEmail.test(inputValue)) {
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'phone') {

                    if (ckPhone.test(inputValue)) {
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'location') {

                    if (ckLocation.test(inputValue)) {
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'newPassword') {

                    if (ckPassword.test(inputValue)) {
                        storePass = inputValue;
                        //console.log("stored password =" + storePass);
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'confirmPassword') {

                    //console.log("confirm password with=" + storePass);

                    if (inputValue == storePass) {
                        console.log('input value is=' + inputValue);
                        noError(e);
                    } else {
                        errorThere(e);

                    }
                } else if (storedId == 'userName') {

                        noError(e);
                    
                } else if (storedId == 'password') {

                        noError(e);   
                }

            } //EOF else

        } // EOF validate(e)

    }, // EOF validation initialised by this

}); //EOF PBF.form