var body = $response.body;
var obj = JSON.parse(body);

obj.mbComboList.forEach(function(combo) {
    combo.endTime = "2099-01-01";
});

$done({body: JSON.stringify(obj)});
