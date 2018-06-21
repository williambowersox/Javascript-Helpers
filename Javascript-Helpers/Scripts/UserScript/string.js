function IsLetter(strValue) {
    let testValue = strValue.toString().toLowerCase();
    var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
    return objRegExp.test(testValue);
}
//Input Name as a single string and returns a Name object split or formatted.
//lfm = Last, First Middle
//fml = First Middle Last
function ExtractName(Name, Order = "lfm") {//lfm = last, first middle : fml = first middle last
    if (typeof Name !== "undefined")
    {
        if (Name.toString().length > 0) {
            alert("LENGTH: " + Name.length);
            let LastName = "";
            let FirstName = "";
            let MiddleName = "";
            let index = 0;

            //First Word
            while (IsLetter((typeof Name[index] !== "undefined" ? Name[index] : "")) == true && index < Name.length) {
                if (Order === "lfm") { LastName += Name[index]; }
                else if (Order === "fml") { FirstName += Name[index]; }
                index++;
            }
            //If Order === "lfm" then index == ',' else ' '
            if (Order === "lfm") { while (IsLetter((typeof Name[index] !== "undefined" ? Name[index] : "")) != true) { index++; } }
            else if (Order === "fml") { while (Name[index] === " ") { index++; } }
            //Process Second Word
            while (IsLetter((typeof Name[index] !== "undefined" ? Name[index] : "")) == true && index < Name.length) {
                if (Order === "lfm") { FirstName += Name[index]; }
                else if (Order === "fml") { MiddleName += Name[index]; }
                index++;
            }
            //Move to thrid Word
            while ((typeof Name[index] !== "undefined" ? Name[index] : "") === " " && index < Name.length) { index++; }
            while (IsLetter((typeof Name[index] !== "undefined" ? Name[index] : "")) == true && index < Name.length) {
                if (Order === "lfm") { MiddleName += Name[index]; }
                else if (Order === "fml") { LastName += Name[index]; }
                index++;
            }
            return { "LastName": LastName.length==0?MiddleName:LastName, "FirstName": FirstName, "MiddleName": LastName.length==0?"":MiddleName, "FML": FirstName + " " + (MiddleName !== "" ? MiddleName + " " : "") + LastName, "LFM": LastName + (FirstName !== "" ? ", " + FirstName : "") + (FirstName !== "" && MiddleName !== "" ? " " + MiddleName : "") };
        }
        else {return { "LastName": "", "FirstName": "", "MiddleName": "", "FML": "", "LFM": "" };}
    }   else {return { "LastName": "", "FirstName": "", "MiddleName": "", "FML": "", "LFM": "" };}
}