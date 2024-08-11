function fibonacci(num) {
// your code here
	let n1=0;
	let n2=1;
	if(num == 1) return 0;
	if(num == 2) return 1;
	let i=2;
	while(i!=num){
		let temp = n2;
		n2 = n1+n2;
		n1 = temp;
		i++;
	}
	return n2;
	
}

module.exports = fibonacci;
