// 教科データ
var category = ['Ja', 'Ma', 'En', 'So', 'Sc', 'Mu', 'Ar'];

// 海平怒りのスコア初期値
var score = [35, 15, 20, 30, 25, 15, 25];

// 海平怒りの倍数（7日分
var multiplier = [
    [1, 1, 2, 3, 5, 8, 13],
    [1, 5, 9, 13, 17, 21, 25],
    [1, 5, 8, 12, 15, 19, 22],
    [1, 3, 5, 7, 9, 11, 13],
    [1, 2, 4, 6, 8, 10, 12],
    [1, 4, 6, 9, 11, 14, 16],
    [1, 2, 2, 3, 5, 8, 11], ];

// 一時格納用変数
var temp = {};
var maxArr = [];
var max = 0;

// 結果格納変数
var resArr = [];
var result = {
    sub: [],
    sum: 0
};

// 各日数の怒りスコア最大値を算出
for (var i = 0, len = multiplier.length; i < len; i++) {
    temp[i] = [];
    max = score[i] * multiplier[i][0];
    for (var j = 0, size = multiplier[i].length; j < size; j++) {
        temp[i][j] = score[i] * multiplier[i][j];
        if (j > 0 && max < temp[i][j]) {
            max = temp[i][j];
        }
        maxArr[i] = max;
    }
}

// 結果連想配列(key:配列番号,val:スコア)
for (var i in maxArr) {
    resArr.push({
        key: i,
        val: maxArr[i]
    });
}

// 怒りスコアの降順にソート
resArr.sort(function (a, b) {
    if (a.val > b.val) {
        return -1;
    }
    if (a.val < b.val) {
        return 1;
    }
    return 0;
});

// 怒り数値の最小値・教科順の算出
for (var i = 0, len = resArr.length; i < len; i++) {
    result.sub[i] = category[resArr[i].key];
    result.sum += score[resArr[i].key] * multiplier[i][resArr[i].key];
}

console.log(result.sum);
console.log(result.sub);