var response = JSON.parse($response.body);

response.mbComboList.forEach(function(combo) {
    combo.endTime = "2099-01-01 00:00:00";
});

$done({body: JSON.stringify(response)});
