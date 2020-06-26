$('#defaultBar').barIndicator();



// Bar Color
var opt = {foreColor:'#fa5555'};$('#barColor').barIndicator(opt);

// Bar Height
var opt = { horBarHeight:27}; $('#barHeight').barIndicator(opt);

// Vertical Height
var opt = { style:'vertical'}; $('#barVertical').barIndicator(opt);
var opt = { style:'vertical', foreColor:'#fa5555'}; $('#barVertical2').barIndicator(opt);
var opt = { style:'vertical', foreColor:'#2bb776'}; $('#barVertical3').barIndicator(opt);

// Bar Holder Color
var opt = {foreColor:'#ffb400', backColor:'#25a0e2'}; $('#barHolderColor').barIndicator(opt);

// label Positions
var opt = {horLabelPos:'topRight', foreColor:'#fa5555'};$('#barLabelTopRight').barIndicator(opt);
var opt = {horLabelPos:'right', foreColor:'#25a0e2'};$('#barLabelRight').barIndicator(opt);
var opt = {horLabelPos:'left', foreColor:'#2bb776'};$('#barLabelLeft').barIndicator(opt);