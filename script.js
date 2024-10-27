function calculateSum() {  
  // 获取输入框的值  
  let num1 = document.getElementById('num1').value;  
  let num2 = document.getElementById('num2').value;  

  // 将字符串转换为数字  
  num1 = parseFloat(num1);  
  num2 = parseFloat(num2);  

  // 计算和  
  let sum = num1 + num2;  

  // 显示结果  
  alert("两个数字的和是: " + sum);  
}