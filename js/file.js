const $result = document.getElementById("result");
const $copyBtn = document.getElementById("copy-btn");
const $range = document.getElementById("range");
const $rangeShow = document.getElementById("range-count");
const $Uppercase = document.getElementById("upper");
const $lowercase = document.getElementById("lower");
const $number = document.getElementById("number");
const $Symbol = document.getElementById("Symbol");
const $generating_btn = document.querySelector(".generating-bnt");

// for displaying the copied word box when the copy btn clicked

$copyBtn.addEventListener("click", (e) => {
    $copyBtn.classList.add("copy");
    // func for deleteting the the copied word box after one .,5 min
    setTimeout(() => {
        $copyBtn.classList.remove("copy");
    }, 500);
    // for copying the text (password) form pass Input
    $result.select();
    $result.setSelectionRange(0, 99999);
    navigator.clipboard.writeText($result.value);
});

// shoing the result of length

$range.addEventListener("input", (e) => {
    $rangeShow.textContent = e.target.value;
});

// functions whcih returns random values
const Functions = {
    $random_upper() {
        let Upper_Chara = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        return Upper_Chara[Math.floor(Math.random() * Upper_Chara.length)];
    },
    $random_lower() {
        let lower_chara = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];
        return lower_chara[Math.floor(Math.random() * lower_chara.length)];
    },
    $random_numbers() {
        let numbers = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];
        return numbers[Math.floor(Math.random() * numbers.length)];
    },
    $random_Symbol() {
        let symbol = "!£$%^&*#~";
        return symbol[Math.floor(Math.random() * symbol.length)];
    },
};

// Making Object that contains All Functions

const $Func_Container = {
    upper: Functions.$random_upper,
    lower: Functions.$random_lower,
    number: Functions.$random_numbers,
    Symbol: Functions.$random_Symbol,
};

// intialization of Generating

$generating_btn.addEventListener("click", () => {
    // Knowing the requirments
    let length = $range.value;
    let upper = $Uppercase.checked;
    let lower = $lowercase.checked;
    let number = $number.checked;
    let symbol = $Symbol.checked;
    result.value = $generation_Pass(length, upper, lower, number, symbol);
});

function $generation_Pass(length, upper, lower, number, Symbol) {
    let password = "";
    let InputCounts = upper + lower + number + Symbol;
    let Arr = [{upper}, {lower}, {number}, {Symbol}].filter(
        (input) => Object.values(input)[0]
    );
    for (let i = 0; i < length; i += InputCounts) {
        Arr.forEach((input) => {
            let Func_Name = Object.keys(input)[0];
            password += $Func_Container[Func_Name]();
        });
    }
    return password;
}
