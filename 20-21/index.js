
window.onload=function(){

	var button=document.querySelector("#submit-btn");
	var input=document.querySelector("#name");
	
	button.onclick=function(){
		console.log(input.value);
	}

	document.onkeydown=function(event){
		if(event.keyCode==27)input.value="";
		if(event.keyCode==13)console.log(input.value);

	}

	
	var school=document.querySelector("#school");
	var company=document.querySelector("#company");
	var schoolselect=document.querySelector("#school-select");
	var companyselect=document.querySelector("#company-select");

		
		
	school.onclick=function(){
		schoolselect.style.display="inline";
		companyselect.style.display="none";
		
	}
	company.onclick=function(){
		schoolselect.style.display="none";this.style.backgroundColor;
		companyselect.style.display="inline";
		
	}

	var palette=document.querySelector(".palette");
	var colorpicker=document.querySelector(".color-picker");
	
	palette.onclick=function(e){
		var e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.nodeName.toLowerCase() == 'li'){
			colorpicker.innerHTML=target.style.backgroundColor;
			colorpicker.style.color=target.style.backgroundColor;

		}
	}


	var fadeobj=document.querySelector("#fade-obj");
	var fadebtn=document.querySelector("#fade-btn");
	function a(t){
		fadeobj.style.opacity=fadeobj.style.opacity-t;
	}
	function b(s){
		fadebtn.removeAttribute('disabled');
		fadebtn.innerHTML=s;
		
	}
	
		fadebtn.onclick=function(){
			if(fadebtn.innerHTML=="淡出"){
				var interval = setInterval(function(){
					a(0.1);
					setTimeout(clearInterval,2000,interval);
				}, 200);
				this.disabled="disabled";
				var str="淡入";
				setTimeout(b,2000,str);
			}
			else{
				var interval = setInterval(function(){
					a(-0.1);
					setTimeout(clearInterval,2000,interval);
				}, 200);
				this.disabled="disabled";
				var str="淡出";
				setTimeout(b,2000,str);
			}
	}
//8160px
	var smile=document.querySelector("#smile");
	var tim=0;
	var flag=0;
	var ss = setInterval(function(){
		if(flag==0){
			smile.style.backgroundPosition="0px "+tim*(-480)+"px";
			tim++;
			if(tim==16){
				flag=1;
				
			}
		}
		else{
			smile.style.backgroundPosition="0px "+tim*(-480)+"px";
			tim--;
			if(tim==0){
				flag=0;
				
			}
		}
		
		
		}, 100);
				
			

	
		
	

	
		
		








}