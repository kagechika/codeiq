/* 問題データ */
var cost_matrix = [
[ 0, 7, 12, 8, 11, 7 ],
[ 3, 0, 10, 7, 13, 2 ],
[ 4, 8, 0, 9, 12, 3 ],
[ 6, 6, 9, 0, 10, 7 ],
[ 7, 7, 11, 10, 0, 5 ],
[ 9, 7, 8, 9, 10, 0 ],
];
for(var i=0,len=cost_matrix.length;i<len;i++){
	for(var j=0,ilen=cost_matrix[i].length;j<ilen;j++){
		if(i!=j){
			console.log(cost_matrix[i][j]);

		}
	}
}


/**
 * [],[],[] i
 * [ , , ] j
 */
var cost_matrix = [
[ 0, 7, 12 ],
[ 3, 0, 10 ],
[ 4, 8, 0 ],
];
var x=0;
for(var i=0,len=cost_matrix.length;i<len;i++){
	if(x==i){
		x++;
	}
	for(var j=0,ilen=cost_matrix[i].length;j<ilen;j++){
		if(i!=j){
			console.log(cost_matrix[i][j]);

		}
	}
	console.log("//");

}

1 - 2 [1][2]=7
2 - 3 [2][3]=10
3 - 1 [3][1]=4

1 - 3 [1][3]=12
3 - 2 [3][2]=8
2 - 1 [2][1]=3