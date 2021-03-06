// CREATE BEGIN

$(document).ready(function () {

    $('#createEmpForm').validate({


        submitHandler: function () {
            Materialize.toast('Successfully Created!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorClass: 'invalid',
        validClass: 'valid',
        errorElement: 'div',
        errorLabelContainer: '.errorcontainer',
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']");
        },
        rules: {
            strEmpFirstName: {
                required: true,
                regx: "^[A-Za-z '`\s]+$",
                noSpace: true,
                minlength: 2
            },
            strEmpMiddleName: {
                regx: "^[A-Za-z '`]+$",
                noSpace: true,
                minlength: 2
            },
            strEmpLastName: {
                required: true,
                regx: "^[A-Za-z '`]+$",
                noSpace: true,
                minlength: 2
            },
            strBirthdate: {
                required: true,
                date: true
            },
            createAge: {
                required: true
            },
            strEmpGender: {
                required: true,
                valueNotEquals: "0"
            },
            strEmpEmail: {
                required: true,
                email: true
            },
            strEmpAddress: {
                required: true,
                regx: "^[a-zA-Z0-9 `#.,-]+$",
                noSpace: true,
                minlength: 10
            },
            selectedJob: {
                required: true,
                valueNotEquals: "default"
            }
        },
        messages: {
            strEmpFirstName: {
                required: "<span class='white-text'><b>First Name</b>: Required</span><br/>",
                regx: "<span class='white-text'><b>First Name</b>: Invalid characters</span><br/>",
                noSpace: "<span class='white-text'><b>First Name</b>: Empty Field</span><br/>",
                minlength: "<span class='white-text'><b>First Name</b>: Minimum of 2 letters</span><br/>"
            },
            strEmpMiddleName: {
                regx: "<span class='white-text'><b>Middle Name</b>: Invalid characters</span><br/>",
                noSpace: "<span class='white-text'><b>Middle Name</b>: Empty Field</span><br/>",
                minlength: "<span class='white-text'><b>Middle Name</b>: Minimum of 2 letters</span><br/>"
            },
            strEmpLastName: {
                required: "<span class='white-text'><b>Last Name</b>: Required</span><br/>",
                regx: "<span class='white-text'><b>Last Name</b>: Invalid characters</span><br/>",
                noSpace: "<span class='white-text'><b>Last Name</b>: Empty Field</span><br/>",
                minlength: "<span class='white-text'><b>Last Name</b>: Minimum of 2 letters</span><br/>"
            },
            strBirthdate: {
                required: "<span class='white-text'><b>Birthday</b>: Required</span><br/>"
            },
            strEmpGender: {
                required: "<span class='white-text'><b>Gender</b>: Required</span><br/>",
                valueNotEquals: "<span class='white-text'><b>Gender</b>: Invalid Gender</span><br/>"
            },
            strEmpEmail: {
                required: "<span class='white-text'><b>Email</b>: Required</span><br/>",
                email: "<span class='white-text'><b>Email</b>: Invalid Email</span><br/>"
            },
            strEmpAddress: {
                required: "<span class='white-text'><b>Address</b>: Required</span><br/>",
                regx: "<span class='white-text'><b>Address</b>: Invalid characters</span><br/>",
                noSpace: "<span class='white-text'><b>Address</b>: Empty Field</span><br/>",
                minlength: "<span class='white-text'><b>Address</b>: Minimum of 10 characters</span><br/>"
            },
            selectedJob: {
                required: "<span class='white-text'><b>Position</b>: Required</span><br/>",
                valueNotEquals: "<span class='white-text'><b>Position</b>: Invalid Position</span><br/>"
            }
        }

    });

    $('form').on('submit', function (e) {
        $(".error_note").remove();
        var select = $(this).find('select').filter("[required=required]");
        $.each(select, function (index, elm) {
            val = $(this).val();
            target = $(this).closest('.input-field');
            if (typeof target !== "undefined") {
                input_target = target.find('input.select-dropdown');
                if (typeof input_target !== "undefined") {
                    if (val == '' || val == false || val == 0 || val == null) {

                        input_target.css({'border-color': '#EA454B', 'box-shadow': '0 1px 0 0 #EA454B'});

                        $('html,body').animate({scrollTop: $("body").offset().top}, 'slow');
                        e.preventDefault();

                    } else {
                        input_target.css({'border-color': '#9e9e9e'});
                    }

                }
            }
        });
    });

    $.validator.addMethod("regx", function(value, element, regexp){
       var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    });
    $.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    });

});


// CREATE END
// CREATE ADD OPTION
$(document).ready(function () {
    $("#createOption").validate({
        
        errorClass: 'invalid',
        validClass: 'valid',
        errorElement: 'div',
        errorLabelContainer: '.errorCreateoption',
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
        },
        rules: {
            addOptionName: {
                required: true,
                noSpace: true,
                regx: "^[A-Za-z -\s]+$",
                minlength: 5
            }
        },
        messages: {
            addOptionName: {
                required: "<span class='white-text'><b>Option Name</b>: Required</span><br/>",
                noSpace: "<span class='white-text'><b>Option Name</b>: Empty field</span><br/>",
                regx: "<span class='white-text'><b>Option Name</b>: Invalid characters</span><br/>",
                minlength: "<span class='white-text'><b>Option Name</b>: Minimum of 5 letters</span><br/>"
            }
        }

    });
    $.validator.addMethod("regx", function(value, element, regexp){
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    });
    $.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    });
});
// CREATE ADD OPTION END

// UPDATE EMPLOYEE BEGIN
$(".updateEmpForm").each(function () {
    $(this).validate({

        submitHandler: function () {
            Materialize.toast('Successfully Created!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strEmpFirstName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            strEmpMiddleName: {
                minlength: 2
            },
            strEmpLastName: {
                required: true,
                minlength: 2
            },
            strBirthdate: {
                required: true
            },
            strEmpGender: {
                required: true
            },
            strEmpContactNo: {
                number: true,
                minlength: 10
            },
            strEmpEmail: {
                required: true,
                email: true
            },
            strEmpAddress: {
                required: true,
                minlength: 10
            },
            selectedJob: {
                required: true
            }
        },
        messages: {
            strEmpFirstName: {
                required: " (Required)",
                minlength: " (Must be at least 2 letters)"
            },
            strEmpMiddleName: {
                minlength: " (Must be at least 2 letters)"
            },
            strEmpLastName: {
                required: " (Required)",
                minlength: " (Must be at least 2 letters)"
            },
            strBirthdate: {
                required: " (Required)"
            },
            strEmpGender: {
                required: " (Required)"
            },
            strEmpContactNo: {
                number: " (Numbers only)",
                minlength: " (Need 10 numbers)"
            },
            strEmpEmail: {
                required: " (Required)",
                email: " (Not Valid Email)"
            },
            strEmpAddress: {
                required: " (Required)",
                minlength: " (Must be at least 10 letters)"
            },
            selectedJob: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");

    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");
});

// UPDATE EMPLOYEE END
// ADD OPTION UPDATE EMPLOYEE
$("#updateOptionForm").each(function () {
    $(this).validate({

        submitHandler: function () {
            var opt2 = $("#updateAddOptionName").val();
            $('#updateAddOptionSelect')
                .append($("<option></option>")
                    .attr("value", opt2)
                    .text(opt2));

            $('.slct2')
                .append($("<option selected></option>")
                    .attr("value", opt2)
                    .text(opt2));
            alert("Successful!");
            $('#updateOption').closeModal();
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            updateAddOptionName: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            updateAddOptionName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            }
        }

    });
    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// ADD OPTION UPDATE EMPLOYEE END

// CREATE PROD SVC
$().ready(function () {
    $("#createProdSvcForm").validate({

        submitHandler: function () {
            Materialize.toast('Successfully Created!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strItemCate: {
                required: true
            },
            strItemName: {
                required: true,
                minlength: 5
            },
            strItemDetails: {
                minlength: 5
            },
            strItemCategory: {
                required: true
            },
            dblItemPrice: {
                required: true
            }
        },
        messages: {
            strItemCate: {
                required: " (Required)"
            },
            strItemName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            },
            strItemDetails: {
                minlength: " (Must be at least 5 letters)"
            },
            strItemCategory: {
                required: " (Required)"
            },
            dblItemPrice: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// CREATE PROD SVC END

// CREATE PROD SVC ADD CATEGORY
$().ready(function () {
    $("#createAddCat").validate({

        submitHandler: function () {
            var opt3 = $("#createAddCategoryName").val();

            $('#createAddCategorySelect')
                .append($("<option></option>")
                    .attr("value", opt3)
                    .text(opt3));

            $('#createPSCategory')
                .append($("<option selected></option>")
                    .attr("value", opt3)
                    .text(opt3));
            alert("Successful!");
            $('#addCategory').closeModal();
            $(form).ajaxSubmit();

        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            createAddCategoryName: {
                required: true,
                minlength: 5,
                lettersonly: true
            }
        },
        messages: {
            createAddCategoryName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)",
                lettersonly: " (Letters and space only)"
            }
        }

    });
    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// CREATE PROD SVC ADD CATEGORY END

// UPDATE PROD FORM
$(".updateProdForm").each(function () {
    $(this).validate({

        submitHandler: function () {
            Materialize.toast('Successfully Created!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strItemCate: {
                required: true
            },
            strItemName: {
                required: true,
                minlength: 5
            },
            strItemDetails: {
                minlength: 5
            },
            strItemCategory: {
                required: true
            },
            dblItemPrice: {
                required: true
            }
        },
        messages: {
            strItemCate: {
                required: " (Required)"
            },
            strItemName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            },
            strItemDetails: {
                minlength: " (Must be at least 5 letters)"
            },
            strItemCategory: {
                required: " (Required)"
            },
            dblItemPrice: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE PROD FORM


// UPDATE SERVICE FORM
$(".updateServForm").each(function () {
    $(this).validate({

        submitHandler: function () {
            Materialize.toast('Successfully Created!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strItemCate: {
                required: true
            },
            strItemName: {
                required: true,
                minlength: 5
            },
            strItemDetails: {
                minlength: 5
            },
            strItemCategory: {
                required: true
            },
            dblItemPrice: {
                required: true
            }
        },
        messages: {
            strItemCate: {
                required: " (Required)"
            },
            strItemName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            },
            strItemDetails: {
                minlength: " (Must be at least 5 letters)"
            },
            strItemCategory: {
                required: " (Required)"
            },
            dblItemPrice: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE SERVICE FORM END

// CREATE DISCOUNT
$().ready(function () {
    $("#createDiscountForm").validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strDiscountName: {
                required: true,
                minlength: 5
            },
            strDiscountDetails: {
                minlength: 5
            },
            strDiscountType: {
                required: true
            }
        },
        messages: {
            strDiscountName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            },
            strDiscountDetails: {
                minlength: " (Must be at least 5 letters)"
            },
            strDiscountType: {
                required: " (Required)"
            },
            dblDiscountPrice: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// CREATE DISCOUNT END

// UPDATE DISCOUNT
$(".updateDiscountForm").each(function () {
    $(this).validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strDiscountName: {
                required: true,
                minlength: 5
            },
            strDiscountDetails: {
                minlength: 5
            },
            strDiscountType: {
                required: true
            }
        },
        messages: {
            strDiscountName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            },
            strDiscountDetails: {
                minlength: " (Must be at least 5 letters)"
            },
            strDiscountType: {
                required: " (Required)"
            },
            dblDiscountPrice: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE DISCOUNT END


// UPDATE PRODUCT ADD CATEGORY
$(".prodAddCatForm").each(function () {
    $(this).validate({

        submitHandler: function () {
            var opt = $("#updateAddCatProdName").val();
            $('#updateAddCatProdSelect')
                .append($("<option></option>")
                    .attr("value", opt)
                    .text(opt));

            $('.updateProdCategory')
                .append($("<option selected></option>")
                    .attr("value", opt)
                    .text(opt));
            alert("Successful!");
            $('#addUpdateProdCategory').closeModal();
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            updateAddCatProdName: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            updateAddCatProdName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            }
        }

    });
    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE PRODUCT ADD CATEGORY END

// UPDATE SERVICE ADD CATEGORY
$(".updateAddCatServ").each(function () {
    $(this).validate({

        submitHandler: function () {
            var opt = $("#updateAddCatProdName").val();
            $('#updateAddCatProdSelect')
                .append($("<option></option>")
                    .attr("value", opt)
                    .text(opt));

            $('.updateProdCategory')
                .append($("<option selected></option>")
                    .attr("value", opt)
                    .text(opt));
            alert("Successful!");
            $('#addUpdateProdCategory').closeModal();
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            updateAddCatServName: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            updateAddCatServName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            }
        }

    });
    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE SERVICE ADD CATEGORY END


// CREATE CATALOGUE
$().ready(function () {
    $("#createCatalogueForm").validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strCatalogueCategoryID: {
                required: true
            },
            strCatalogueName: {
                required: true
            }
        },
        messages: {
            strCatalogueCategoryID: {
                required: " (Required)"
            },
            strCatalogueName: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// CREATE CATALOGUE END

// UPDATE CATALOGUE
$('.updateCataForm').each(function () {
    $(this).validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strCatalogueCategoryID: {
                required: true
            },
            strCatalogueName: {
                required: true
            }
        },
        messages: {
            strCatalogueCategoryID: {
                required: " (Required)"
            },
            strCatalogueName: {
                required: " (Required)"
            }
        }

    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE CATALOGUE END

// CREATE OTHER CHARGE
$().ready(function () {
    $("#createExtraForm").validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strECName: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            strECName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            }
        },
    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});

// CREATE OTHER CHARGE END


// UPDATE OTHER CHARGE
$('.updateExtraForm').each(function () {
    $(this).validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strECName: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            strECName: {
                required: " (Required)",
                minlength: " (Must be at least 5 letters)"
            }
        },
    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
});
// UPDATE OTHER CHARGE END

// CREATE PACKAGE FORM
$().ready(function () {
    $("#createPackageForm").validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strPackageName: {
                required: true,
                minlength: 2
            },
            strPackageDesc: {
                minlength: 5
            },
            intPackageType: {
                required: true
            },
            dblPackagePrice: {
                required: true
            }
        },
        messages: {
            strPackageName: {
                required: " (Required)",
                minlength: " (Must be at least 2 letters)"
            },
            strPackageDesc: {
                minlength: " (Must be at least 5 letters)"
            },
            intPackageType: {
                required: " (Required)"
            },
            dblPackagePrice: {
                required: " (Required)"
            }
        }
    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");

    jQuery.validator.addClassRules("group-required", {
        require_from_group: [1, ".group-required"]
    }, " (Required)");

});
// CREATE PACKAGE FORM END

// CREATE PROMO
$().ready(function () {
    $("#createPromoForm").validate({

        submitHandler: function () {
            Materialize.toast('Successfully Updated!', 5000, 'green');
            $(form).ajaxSubmit();
        },
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            strPromoName: {
                required: true,
                minlength: 2
            },
            strPromoDesc: {
                minlength: 5
            },
            require_from_group: [1, ".fillone"]
        },
        messages: {
            strPromoName: {
                required: " (Required)",
                minlength: " (Must be at least 2 letters)"
            },
            strPromoDesc: {
                minlength: " (Must be at least 5 letters)"
            },
            require_from_group: " (Required)"
        }
    });
    jQuery.validator.addMethod("specialname", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z ` - ' are allowed)</span>");

    jQuery.validator.addMethod("specialprodsvc", function (value, element) {
        return this.optional(element) || /([a-zA-Z-`'\s])$/.test(value);
    }, "<span class='red-text'> (A-z - are allowed)</span>");

    jQuery.validator.addMethod("specialaddress", function (value, element) {
        return this.optional(element) || /([#A-Za-z0-9\s.,-])$/.test(value);
    }, "<span class='red-text'> (A-z 0-9 . , - # are allowed)</span>");

    jQuery.validator.addMethod("specialprice", function (value, element) {
        return this.optional(element) || /([0-9])$/.test(value);
    }, "<span class='red-text'> (Numbers only)</span>");

    jQuery.validator.addMethod("specialoption", function (value, element) {
        return this.optional(element) || /([a-zA-Z\s])$/.test(value);
    }, "<span class='red-text'> (Letters and spaces are allowed)</span>");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") != "";
    }, " (Empty field)");
    jQuery.validator.addClassRules("fillone", {
        require_from_group: [1, ".fillone"]
    }, " (Required)");

    jQuery.validator.addClassRules("filltwo", {
        require_from_group: [1, ".filltwo"]
    }, " (Required)");

    jQuery.validator.addClassRules("fillthree", {
        require_from_group: [1, ".fillthree"]
    }, " (Required)");

});
// CREATE PROMO END