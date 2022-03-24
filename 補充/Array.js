1 定義 Array 物件
  let arr = [];
  let arr = new Array();

  let arr = [2,4,6,'ABC',false,new Date()];
  let arr = new Array(2,4,6,'ABC',false,new Date());


2. 如何存取?
    arr[0]  ---> 2

    --------------
    for(let i = 0; i < arr.length; i++){
        // use arr[i]
    }

    for(let index in arr){
        // arr[index]
    }

3. 屬性: length

4. 方法:
    
    push(item) | pop()      新增刪除在後端
    unshift(item) | shift() 新增刪除在前端
    新增刪除在任意端
        splice(index) 
        splice(index, 筆數) 
        splice(index, 筆數, 100, 200, 300)  

        
    join() 陣列組合成字串

        
    傳回值(陣列) = 陣列.filter(function(data){return 符合篩選條件的 data})
    傳回值(陣列) = 陣列.filter(data => 符合篩選條件的 data)

    傳回值(陣列) = 陣列.map(function(data){return 逐個處理的結果})
    傳回值(陣列) = 陣列.map(data => 逐個處理的結果)
    
    傳回值 = 陣列.reduce(function(accumulator, data){return 逐個處理，每次處理的結果放進累計器中})
    傳回值 = 陣列.reduce((accumulator, data) => 逐個處理，每次處理的結果放進累計器中)