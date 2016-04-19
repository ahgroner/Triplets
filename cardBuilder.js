function buildCard(id)
{
	shape= getShape(id);
	fill= getFill(id);
	color= getColor(id);
	count= getCount(id);

shape1count1='<rect class="shape" x="20.6846662" y="20.6846662" width="58" height="58" rx="5" transform="translate(50,-20) rotate(45)"></rect>'
shape1count2='<rect class="shape" width="36" height="36" rx="5" transform="translate(70,10) rotate(45)"></rect>'
            +'<rect class="shape" width="36" height="36" rx="5" transform="translate(37,43) rotate(45)"></rect>'

shape1count3='<rect class="shape" width="28" height="28" rx="5" transform="translate(50, 10) rotate(45)"></rect>'
            +'<rect class="shape" width="28" height="28" rx="5" transform="translate(25, 40) rotate(45)"></rect>'
            +'<rect class="shape" width="28" height="28" rx="5" transform="translate(75, 40) rotate(45)"></rect>'

shape2count1='<polygon class="shape" points="50 13 64.6081787 21.4340359 82.0429399 31.5 77.8636114 50 82.0429399 68.5 50 87 17.9570601 68.5 22.0657136 50 17.9570601 31.5 "></polygon>'

shape2count2='<polygon class="shape" points="62.7641255 11 71.3185745 15.652763 81.528251 21.2058038 79.0808649 31.4116076 81.528251 41.6174115 62.7641255 51.8232153 44 41.6174115 46.4059993 31.4116076 44 21.2058038 "></polygon>'
            +'<polygon class="shape" points="36.6261616 49 45.1177138 53.652763 55.2523232 59.2058038 52.8229316 69.4116076 55.2523232 79.6174115 36.6261616 89.8232153 18 79.6174115 20.3883091 69.4116076 18 59.2058038 "></polygon>'

shape2count3='<polygon class="shape" points="28.02147 46 34.8696655 49.9538075 43.0429399 54.6726497 41.0837047 63.3452995 43.0429399 72.0179492 28.02147 80.6905989 13 72.0179492 14.9261034 63.3452995 13 54.6726497 "></polygon>'
            +'<polygon class="shape" points="72.02147 46 78.8696655 49.9538075 87.0429399 54.6726497 85.0837047 63.3452995 87.0429399 72.0179492 72.02147 80.6905989 57 72.0179492 58.9261034 63.3452995 57 54.6726497 "></polygon>'
            +'<polygon class="shape" points="49.02147 11 55.8696655 14.9538075 64.0429399 19.6726497 62.0837047 28.3452995 64.0429399 37.0179492 49.02147 45.6905989 34 37.0179492 35.9261034 28.3452995 34 19.6726497 "></polygon>'

shape3count1='<ellipse class="shape" cx="52.1265976" cy="48.1265976" rx="34.1265976" ry="34.1265976"></circle>'
shape3count2='<circle class="shape" cx="40" cy="64.0906583" r="20" ></circle>'
            +'<circle class="shape"  cx="75" cy="30.0906583" r="20" ></circle>'
shape3count3='<circle class="shape"  cx="74.5334835" cy="68.9624408" r="16" ></circle>'
            +'<circle class="shape"  cx="28.5334835" cy="68.9624408" r="16" ></circle>'
            +'<circle class="shape" cx="51.5334835" cy="27.9624408" r="16" ></circle>'

shapes=[
[shape1count1, shape1count2, shape1count3],
[shape2count1, shape2count2, shape2count3],
[shape3count1, shape3count2, shape3count3]
]
stroke_widths=[2,2,1.5]
	card=$('<div class="card" id="'+id+'" data-id="'+id+'">'
        +'<svg class="color'+color+' fill'+fill+'" stroke-width="'+stroke_widths[count-1]+'" width="200px" height="200px" viewBox="0 0 100 100" >'
          +'<g>'
          +shapes[shape-1][count-1]
          +"</g>"
			+'</svg>'
		+'</div>');
	return card;
}



