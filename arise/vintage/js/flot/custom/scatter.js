$(function(){var a,b,c,d,e;a=[[0,12],[21,38],[13,29],[82,14],[52,43],[32,59],[92,48],[68,31],[32,24],[30,67],[10,45],[37,5],[18,41],[31,70]],b=[[23,40],[46,16],[20,42],[33,41],[51,39],[11,28],[32,36],[38,40],[99,22],[41,30],[21,18]],c=[[3,23],[4,36],[29,62],[13,55],[11,42],[6,37],[27,16],[3,45],[79,52],[39,90],[11,68]],d=[{label:"Likes",data:a},{label:"Shares",data:b},{label:"Comments",data:c}],e={xaxis:{},yaxis:{},series:{lines:{show:!1,fill:!1,lineWidth:4},points:{show:!0,radius:3,fill:!0,lineWidth:6}},grid:{hoverable:!0,clickable:!0,borderWidth:1,tickColor:"#E5E5E5",borderColor:"#E5E5E5"},legend:{show:!0},tooltip:!0,tooltipOpts:{content:"%s: %y"},shadowSize:0,colors:["#e77338","#5e83bf","#ffd65f","#91c46b"]};var f=$("#scatter-chart");f.length&&$.plot(f,d,e)});