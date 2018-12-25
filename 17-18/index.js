window.onload=function(){

	var first=document.getElementById('first-number');
	var second=document.getElementById('second-number');
	var add=document.getElementById("add-btn");
	var min=document.getElementById("minus-btn");
	var tim=document.getElementById("times-btn");
	var div=document.getElementById("divide-btn");
	var result=document.getElementById("result");

	add.onclick=function(){
		if(first.value===""||second.value===""){
				console.log("输入值不为数字");
				return;
		}
		result.innerHTML="运算结果:"+(parseInt(first.value)+parseInt(second.value));		
	}

	min.onclick=function(){
		if(first.value===""||second.value===""){
				console.log("输入值不为数字");
				return;
		}
		result.innerHTML="运算结果:"+(parseInt(first.value)-parseInt(second.value));
	}

	tim.onclick=function(){
		if(first.value===""||second.value===""){
				console.log("输入值不为数字");
				return;
		}
		result.innerHTML="运算结果:"+(parseInt(first.value)*parseInt(second.value));	
	}
	
	div.onclick=function(){
		if(first.value===""||second.value===""){
				console.log("输入值不为数字");
				return;
		}
		if(second.value==0){
			console.log("被除数不能为0");
			return;
		}
		result.innerHTML="运算结果:"+(parseInt(first.value)/parseInt(second.value));
	}



	var tran=document.getElementById("trans-btn");
	var dec=document.getElementById("dec-number");
	var myarray=new Array();
	var bin=document.getElementById("bin-bit");
	var index=0;
	var str="";
	var result2=document.getElementById("result2");
	
	tran.onclick=function(){
		var copy=dec.value;
 		str="";
 		index=0;

		while(copy!=0){
			copy=parseInt(dec2bin(copy));		
		}
		if(bin.value<index){
			for(var i=index-1;i>=0;i--)str=str+myarray[i];
			result2.innerHTML="运算结果"+parseInt(str);
			console.log("出错");
		}
		else{
			for(var i=bin.value-index;i>0;i--)str=str+"0";

			for(var i=index-1;i>=0;i--)str=str+myarray[i];
			result2.innerHTML="运算结果"+str;


		}
		
		
	}
	var dec2bin=function(sum){	
			myarray[index]=sum%2;
			sum=sum/2;
			index++;
			return sum;			
	}

	console.log("任务三");
	for(var i=1;i<=100;i++){

		if(i%3==0)console.log("PA");
		else console.log(i);
	}

 	var nine=document.getElementById("nine");
 	nine.onclick=function(){
 		document.write("<table style='border-collapse :collapse ;'>");
 		for(var i=0;i<=9;i++){
 			document.write("<tr>");

 			for(var y=0;y<=9;y++){
 				if(i==0&&y==0)document.write("<td style='width:50px;border:1px solid black'>y|x</td>");
 				else if(i==0&&y!=0)document.write("<td style='width:50px;border:1px solid black'>"+y+"</td>");
 				else if(i!=0&&y==0)document.write("<td style='width:50px;border:1px solid black'>"+i+"</td>");
 				else document.write("<td style='width:50px;border:1px solid black'>"+i*y+"</td>");
			}
			document.write("</tr>");
 		}
 		document.write("</table>");

 	}
	
 	var time=new Date();
 	var h=time.getHours();
	
	if(h>=5&&h<=10)alert("早上好");
	else if(h>=11&&h<=14)alert("中午好");
	else if(h>=15&&h<=17)alert("下午好");
	else alert("晚上好");




	




}