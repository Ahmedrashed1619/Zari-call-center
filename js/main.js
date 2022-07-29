
// for change activity

// let btn = document.querySelector('.inputs-list button');

// let options = Array.from(document.querySelectorAll('.dropdown-menu a'));

// options.forEach(option => {
//     option.addEventListener('click' , function(){
//         btn.innerHTML = option.innerHTML;
//     })
// });


// to get inputs values

function Activity(Value){
    document.getElementById("Activity").value = Value;
    document.getElementById("activity").innerHTML = Value;
}


    // for email 

    let checkEmail;
    function validUserEmail(){
        let regexEmail = /^[a-zA-Z0-9_ .]{2,}\@[a-zA-Z0-9_ .]{2,}(\.com)$/;
        checkEmail = regexEmail.test($('#email').val());
        if(checkEmail == true)
        {
            $('#alertEmail').css('display' , 'none');
        }
        else
        {
            $('#alertEmail').css('display' , 'block');
        }
    }

    $('#email').on('input' , function(){
        validUserEmail();
    })


// to send order

function SubmitForm() {
    let Name = document.getElementById("name").value;
    let Phone = document.getElementById("phone").value;
    let ClientEmail = document.getElementById("email").value;
    let Activity = document.getElementById("Activity").value;


    if (Phone != "") {
        if(ClientEmail != ""){
            if(checkEmail == true){
                $.ajax({
                    url: 'https://zarisolution.com/call/index_form_submit.php',
                    type: 'POST',
                    data: { Name: Name, Phone: Phone, ClientEmail: ClientEmail, Activity: Activity, _token: '{{csrf_token()}}' },
                    dataType: "json",
                    success: function (Data) {
                        document.getElementById("name").value = "";
                        document.getElementById("phone").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("Activity").value = "";
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        document.getElementById("name").value = "";
                        document.getElementById("phone").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("Activity").value = "";
                    }
                });
                $('#alertRegister').html('تم إرسال طلبك . سيتم التواصل معك قريبا');
                $('#alertRegister').addClass('text-success');
                $('#alertRegister').removeClass('text-danger');
            }else{
                $('#alertRegister').html('هناك حقل أو أكثر غير صالح , يجب التأكد من ملئ كل الحقول بالطريقة الصحيحة');
                $('#alertRegister').addClass('text-danger');
                $('#alertRegister').removeClass('text-success');
            }
        }
        $.ajax({
            url: 'https://zarisolution.com/call/index_form_submit.php',
            type: 'POST',
            data: { Name: Name, Phone: Phone, ClientEmail: ClientEmail, Activity: Activity, _token: '{{csrf_token()}}' },
            dataType: "json",
            success: function (Data) {
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("Activity").value = "";
            },
            error: function (xhr, ajaxOptions, thrownError) {
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("Activity").value = "";
            }
        });
        $('#alertRegister').html('تم إرسال طلبك . سيتم التواصل معك قريبا');
        $('#alertRegister').addClass('text-success');
        $('#alertRegister').removeClass('text-danger');
    }
    else {
        $('#alertRegister').html('هناك حقل أو أكثر غير صالح , يجب التأكد من ملئ كل الحقول بالطريقة الصحيحة');
        $('#alertRegister').addClass('text-danger');
        $('#alertRegister').removeClass('text-success');
    }
}


// for get dynamic year

let date = new Date;
let year = date.getFullYear();

$('#year').html(year);