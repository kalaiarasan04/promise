
let stocks={
	
	Fruits:["grapes","banana","apple","strawbery"],
	liquid:["water","ice"],
	holder:["cone","cup","stick"],
	toppings:["chocolate","nuts"]
	
}

let time=new Promise((resolve,reject)=>{
	
	let isShopOpen=false;
		
		if(isShopOpen){
			
			resolve()
			
		}
		
		else{
			
			reject(console.log("shop is closed"))
			
		}
		
		
	})
	

Promise.all([time]).then(()=>{
		
		setTimeout(()=>{
			
			console.log(`${stocks.Fruits[2]} was Selected`);
			
		},2000)
		
		setTimeout(()=>{
			
			console.log("Production startted");
			
		},2000)
		
		setTimeout(()=>{
			
			console.log("Fruits has been chopped");
			
		},3000)
		
		setTimeout(()=>{
			
			console.log(`${stocks.liquid[1]} added`);
			
		},4000)
		
		setTimeout(()=>{
			
			console.log("Machine started");
			
		},5000)
		
		setTimeout(()=>{
			
			console.log(`Icecream placed on ${stocks.holder[0]}`);
			
		},6000)
			
		setTimeout(()=>{
			
			console.log(`${stocks.toppings[0]} as toppings`);
			
		},7000)
			
		setTimeout(()=>{
			
			console.log("serve ice cream");
			
		},9000)
		
})	


	
	.catch(()=>{
		
		setTimeout(()=>{
			
			console.log("Customer left");
		
			
		},2000)
	})
	
	

