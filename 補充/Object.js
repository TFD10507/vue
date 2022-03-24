1 定義 Object 物件
  let obj = {};
  let obj = new Object();

  (1)
  let obj = {
      name: 'Peter',
      age: 40,
  };

  (2)
  let obj = {};
  obj.name = 'Peter';
  obj.age = 40;

  let man = {
      name: 'Peter',
      age: 40,
      gender: 'male',
      favoriateColor: ['white','gray','black'],
      car: {
          make: 'BMW',
          mode: 'X5',
          year: 2021,
      },
      retired: false,
      // sayHello: function(){},  // ES5
      sayHello(){   // ES6

      },  
  };

2. 如何存取?
    man.age ---> 40
    man.favoriateColor[1] ---> gray
    man.car.make ---> BMW
            物件的陣列標示法: man['car']['make']  ---> BMW
    man.sayHello()

    --------------
    語法: for(let key in 物件|陣列){}

    for(let key in man){
        console.log(key);   // 印出物件 「:」左邊的 key 值
        console.log(man[key]);  // 印出物件 「:」右邊的 value 值
    }


    以下狀況要使用物件的陣列標示法
    let products = {
        10: 'hat',
        20: 't-shirt',
        30: 'iPad',
        40: 'iPhone',
        50: 'Mac Pro',
        60: 'Air Pods',
    };

    products.30 ---> XX
    products[30] ---> iPad