$(function(){var a=[[0,10],[1,120],[2,200],[3,300],[4,157],[5,78],[6,58],[7,428],[8,194],[9,38],[10,-188],[11,-214],[12,-364],[13,49],[14,8],[15,82]],b=[[0,80],[1,320],[2,400],[3,500],[4,357],[5,278],[6,358],[7,248],[8,54],[9,338],[10,188],[11,314],[12,464],[13,559],[14,458],[15,182]],c=[[15,10],[14,420],[13,500],[12,490],[11,100],[10,200],[9,-50],[8,-100],[7,-150],[6,-340],[5,-65],[4,-90],[3,-280],[2,-400],[1,-120],[0,280]],d=[[0,"22h"],[1,""],[2,"00h"],[3,""],[4,"02h"],[5,""],[6,"04h"],[7,""],[8,"06h"],[9,""],[10,"08h"],[11,""],[12,"10h"],[13,""],[14,"12h"],[15,""]],e=[{label:"Last 24 Hours",data:a,lines:{show:!0,lineWidth:2},points:{show:!0,radius:4,fill:!0,fillColor:"#FFFFFF",lineWidth:2}},{label:"Last 48 Hours",data:b,lines:{show:!0,lineWidth:2},points:{show:!0,radius:4,fill:!0,fillColor:"#FFFFFF",lineWidth:2}},{label:"Difference",data:c,bars:{show:!0}}],f={series:{shadowSize:0,bars:{lineWidth:1}},xaxis:{ticks:d},grid:{hoverable:!0,clickable:!1,borderWidth:1,tickColor:"#dfe2f0",borderColor:"#dfe2f0"},legend:{show:!0,position:"nw",noColumns:0},tooltip:!0,tooltipOpts:{content:"%x: %y"},colors:["#ff7671","#ffda68","#3fcbca","#4bb5ea"]};$.plot($("#combineChartCompare"),e,f)});