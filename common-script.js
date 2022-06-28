const string = "Привет! Как дела?";
const vowels = ["у","е","ы","а","о","э","я","и","ю"];

const getVowels = str => {
  let result = "";
  for (let i=0; i<str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      result += char;
    }
  }
  return result;
};

console.log(getVowels(string));

const workers = [
		{"name":"John","salary":500},
		{"name":"Mike","salary":1300},
		{"name":"Linda","salary":1500}];

const getWorthyWorkers = arr => {
  let worthy = [];
  arr.forEach(worker => {
    if (worker.salary > 1000) {
      worthy.push(worker.name);
    }
  });
  return worthy;
};
console.log(getWorthyWorkers(workers));

const path = "/users/download/index.html";
const res = ".html";
const isHtml = string => {
  return string.slice(-5) == res;
}
console.log(isHtml(path));

const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
  return num % 2 == 0;
};
const filterArray = (arr, fn) => {
  let res = [];
  arr.forEach(el => {
    if (fn(el)) {
      res.push(el);
    }
  })
  return res;
};
console.log(filterArray(mixedArray, isEven));
