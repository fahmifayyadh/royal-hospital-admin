function onDocumentReady(){function a(){b.update(50*Math.random())}var b=gauge("#power-gauge",{size:130,clipWidth:130,clipHeight:130,ringWidth:10,maxValue:105,transitionMs:4e3});b.render(),a(),setInterval(function(){a()},1e4)}var gauge=function(a,b){function c(a){return a*Math.PI/180}function d(a){var b=void 0;for(b in a)j[b]=a[b];k=j.maxAngle-j.minAngle,l=j.size/2,m=Math.round(l*j.pointerHeadLengthPercent),p=d3.scale.linear().range([0,1]).domain([j.minValue,j.maxValue]),q=p.ticks(j.majorTicks),r=d3.range(j.majorTicks).map(function(){return 1/j.majorTicks}),o=d3.svg.arc().innerRadius(l-j.ringWidth-j.ringInset).outerRadius(l-j.ringInset).startAngle(function(a,b){var d=a*b;return c(j.minAngle+d*k)}).endAngle(function(a,b){var d=a*(b+1);return c(j.minAngle+d*k)})}function e(){return"translate("+l+","+l+")"}function f(){return void 0!==n}function g(b){n=d3.select(a).append("svg:svg").attr("class","gauge").attr("width",j.clipWidth).attr("height",j.clipHeight);var c=e(),d=n.append("g").attr("class","arc").attr("transform",c);d.selectAll("path").data(r).enter().append("path").attr("fill",function(a,b){return j.arcColorFn(a*b)}).attr("d",o);var f=n.append("g").attr("class","label").attr("transform",c);f.selectAll("text").data(q).enter().append("text").attr("transform",function(a){var b=p(a),c=j.minAngle+b*k;return"rotate("+c+") translate(0,"+(j.labelInset-l)+")"}).text(j.labelFormat);var g=[[j.pointerWidth/2,0],[0,-m],[-(j.pointerWidth/2),0],[0,j.pointerTailLength],[j.pointerWidth/2,0]],i=d3.svg.line().interpolate("monotone"),t=n.append("g").data([g]).attr("class","pointer").attr("transform",c);s=t.append("path").attr("d",i).attr("transform","rotate("+j.minAngle+")"),h(void 0===b?0:b)}function h(a,b){void 0!==b&&d(b);var c=p(a),e=j.minAngle+c*k;s.transition().duration(j.transitionMs).ease("elastic").attr("transform","rotate("+e+")")}var i={},j={size:200,clipWidth:200,clipHeight:110,ringInset:20,ringWidth:20,pointerWidth:10,pointerTailLength:5,pointerHeadLengthPercent:.9,minValue:0,maxValue:10,minAngle:-90,maxAngle:90,transitionMs:750,majorTicks:5,labelFormat:d3.format(",g"),labelInset:10,arcColorFn:d3.interpolateHsl(d3.rgb("#32AB52"),d3.rgb("#4286F7"))},k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0,r=void 0,s=void 0;return d3.layout.pie(),i.configure=d,i.isRendered=f,i.render=g,i.update=h,d(b),i};window.isLoaded?onDocumentReady():window.addEventListener("load",function(){onDocumentReady()},!1);