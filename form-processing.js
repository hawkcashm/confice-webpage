class FormProcessor{
    constructor(){

    }

    // Set files on drag and drop
    setFileOnDrop(e) {
        this.files = e.dataTransfer.files;
    }

    // Set files on manual select
    setFilesOnSelect(e) {
        this.files = e.target.files;

    }

    // Form validation
    checkFormBeforeSubmit(){
        this.nameField = document.getElementById("fullname-input");
        this.nameError = document.getElementById("form-error-name");
        this.emailField = document.getElementById("email-input");
        this.emailError = document.getElementById("form-error-email");
        this.checkboxes = document.getElementsByClassName("work-position-checkbox");
        this.positionError = document.getElementById("form-error-positions");
        this.fileMissingError = document.getElementById("form-error-file-missing");
        this.fileTypeError = document.getElementById("form-error-file-type");

        this.nameError.style.display = "none";
        this.emailError.style.display = "none";
        this.positionError.style.display = "none";
        this.fileMissingError.style.display = "none";
        this.fileTypeError.style.display = "none";



        let valid = true;
        let nameFieldParts = this.nameField.value.split(" ");
        if(nameFieldParts.length<2){
            valid = false;
            this.nameError.style.display = "block";
        }
        let email = this.emailField.value;
        let emailRegex = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
        if(!email.match(emailRegex)){
            valid = false;
            this.emailError.style.display = "block";
        }
        let anyCheckboxChecked = false;
        for (let i=0; i<this.checkboxes.length; i++){
            const chb = this.checkboxes[i];
            if(chb.checked){
                anyCheckboxChecked = true;

            }
        }
        if(!anyCheckboxChecked) {
            valid = false;
            this.positionError.style.display = "block";
        }

        if(!this.files){

            this.fileMissingError.style.display = "block";
            return false;

        }

        let file = this.files[0];
        if(file){
            const filename = file.name;
            const ext = filename.split(".").pop();
            if(!(ext === "doc" || ext === "pdf" || ext === "docx")){
                valid = false;
                this.fileTypeError.style.display = "block";
            }
        }
        return valid;

    }
}
