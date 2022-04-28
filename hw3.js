// Q1 Function This 

function max(iterable, key) {
  var maximum = 0;
  for (var i in iterable) {
    var a = key(iterable[i]);
    if (a >= maximum) {
      maximum = iterable[i];
    }
  }

  return maximum;
}

const x = [1, 2, 2, 3, 7, 1];
function addOne(num) {
  var end = num + 1;
  return end;
}
var answer = max(x, addOne);
console.log(answer);

// Q2 Flip It and Reverse It
const reverser = (x) => -x; //making neg flips the num values

// no Q3

// Q4: Objects Gworl

function changer(object, key, value) {
    var jobj = JSON.parse(object);
    let prev = jobj[key];
    if (Array.isArray(prev)) {
        
       
        prev.push(value);
        return JSON.stringify(jobj);
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        jobj.key = value;
        return JSON.stringify(jobj);
    } else {
       
        
        jobj[key] = value;
        return JSON.stringify(jobj);
    }
    return null
}

// Q5: Promises Promises

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        
        console.log(1);

        resolve(count = 5);
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = count;
    console.log(five)
    return five
}

promise_me()
// var myJSON = '{"name": {"test": 42}, "age":31, "city":"New York"}';
