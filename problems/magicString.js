var x = 5,
items = ['ABAB',
'AABB',
'CDDCXX',
'ZLZP',
'YYY'];

function soultion(x , items) {
	
	if( x < 100){
       var i;
       for (i = 0; i < x ; i++){
       	if (items[i].length < 50){

       	}
       	else{
       		console.log('length is big');
       	}
       }
	}
	else{
		console.log('inavlid input of numbers');
	}
}