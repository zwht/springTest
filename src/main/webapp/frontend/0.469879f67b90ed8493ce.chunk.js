webpackJsonp([0],{"7JLO":function(n,t,e){"use strict";e.d(t,"a",function(){return o});var l=e("LMZF"),i=(e("QLiD"),e("LM7e"),e("H4Cz")),o=function(){function n(n,t){this.fileService=n,this.nzModalService=t,this.loading=!1,this.dialog=!1,this.contentDialogStyle={},this.saveEnd=new l.EventEmitter}return n.prototype.ngOnInit=function(){this.boxStyle?(this.boxStyle.width=this.boxStyle.width?this.boxStyle.width:200,this.boxStyle.height=this.boxStyle.height?this.boxStyle.height:200):this.boxStyle={width:200,height:200},this.contentDialogStyle={width:this.boxStyle.width+"px",height:this.boxStyle.height+"px"},this.cropperInit()},n.prototype.cropperInit=function(){var n=window.URL;if(n){var t=this;this.inputImage.nativeElement.onchange=function(){var e,l=t.inputImage.nativeElement.files;l&&l.length&&(t.dialog=!0,/^image\/\w+/.test((e=l[0]).type)?t.showModalForComponent(n.createObjectURL(e)):window.alert("Please choose an image file."))}}},n.prototype.showDialog=function(){this.inputImage.nativeElement.setAttribute("type","text"),this.inputImage.nativeElement.setAttribute("type","file"),this.inputImage.nativeElement.click()},n.prototype.putb64=function(n,t){var e=n.split(",")[1],l=new XMLHttpRequest,i=this;l.onreadystatechange=function(){if(4===l.readyState){var n=JSON.parse(l.response);n.hash&&(i.cpImg=n.url="http://ozq3tirki.bkt.clouddn.com/"+n.hash),i.inputImage.nativeElement.files=null,i.saveEnd.emit(n),i.dialog=!1,i.loading=!1}},l.open("POST","http://upload-z2.qiniu.com/putb64/-1",!0),l.setRequestHeader("Content-Type","application/octet-stream"),l.setRequestHeader("Authorization","UpToken "+t),l.send(e)},n.prototype.save=function(n){var t=this;this.loading=!0;var e=n.getCroppedCanvas({width:this.boxStyle.width,height:this.boxStyle.height}).toDataURL("image/jpg");this.fileService.upToken({},{}).then(function(n){200===n.code&&t.putb64(e,n.data)})},n.prototype.showModalForComponent=function(n){var t=this;this.nzModalService.open({title:"\u5bf9\u8bdd\u6846\u6807\u9898",content:i.a,onOk:function(){},onCancel:function(){console.log("Click cancel")},footer:!1,componentParams:{blobURL:n,boxStyle:this.boxStyle}}).subscribe(function(n){"onShown"!=n&&n.getCroppedCanvas&&t.save(n)})},n}()},"7tcH":function(n,t,e){"use strict";var l=e("LMZF"),i=e("E9x/"),o=e("LM7e"),u=e("Un6q");e("QLiD"),e("qzmN"),e("7JLO"),e.d(t,"a",function(){return a}),t.b=function(n){return l["\u0275vid"](0,[l["\u0275qud"](402653184,1,{image:0}),l["\u0275qud"](402653184,2,{inputImage:0}),l["\u0275qud"](402653184,3,{cImg:0}),(n()(),l["\u0275eld"](3,0,null,null,10,"div",[["class","cropperImg"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n  "])),(n()(),l["\u0275and"](16777216,null,null,1,null,c)),l["\u0275did"](6,16384,null,0,u.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275ted"](-1,null,["\n  "])),(n()(),l["\u0275eld"](8,0,[[2,0],["inputImage",1]],null,0,"input",[["accept","image/*"],["style","display: none;"],["type","file"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n  "])),(n()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](11,16384,null,0,u.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275ted"](-1,null,["\n\n  "])),(n()(),l["\u0275ted"](-1,null,["\n"])),(n()(),l["\u0275ted"](-1,null,["\n"]))],function(n,t){var e=t.component;n(t,6,0,!!e.cpImg),n(t,11,0,!e.cpImg)},null)};var a=l["\u0275crt"]({encapsulation:0,styles:[[".cropperImg[_ngcontent-%COMP%]{display:inline-block}.cropperImg[_ngcontent-%COMP%]   .headerDialog[_ngcontent-%COMP%]{color:#000}.cropperImg[_ngcontent-%COMP%]   .contentDialog[_ngcontent-%COMP%]{background:#c00;margin:0 auto}.cropperImg[_ngcontent-%COMP%]   .showImg[_ngcontent-%COMP%]{display:inline-block;position:relative;height:100px}.cropperImg[_ngcontent-%COMP%]   .showImg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{left:0;top:0;height:100%;width:100%;background:rgba(0,0,0,.3);display:none;line-height:100px;text-align:center;color:#fff;cursor:pointer;position:absolute}.cropperImg[_ngcontent-%COMP%]   .showImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.cropperImg[_ngcontent-%COMP%]   .showImg[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{display:block}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"div",[["class","showImg"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.showDialog()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\u91cd\u65b0\u9009\u62e9\u56fe\u7247"])),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](5,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n  "]))],null,function(n,t){n(t,5,0,t.component.cpImg)})}function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](2,0,null,null,2,"button",[["nz-button",""],["nzType","primary"]],null,[[null,"click"]],function(n,t,e){var i=!0,o=n.component;return"click"===t&&(i=!1!==l["\u0275nov"](n,3)._onClick()&&i),"click"===t&&(i=!1!==o.showDialog()&&i),i},i.x,i.g)),l["\u0275did"](3,1097728,null,0,o.w,[l.ElementRef,l.Renderer2],{nzType:[0,"nzType"]},null),(n()(),l["\u0275ted"](-1,0,["\u9009\u62e9\u56fe\u7247"])),(n()(),l["\u0275ted"](-1,null,["\n  "]))],function(n,t){n(t,3,0,"primary")},null)}},QLiD:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e("qzmN");var l=function(n){this.url="./cfmy/file/:params1/:params2/:params3/:params4/:params5",this.urls={upToken:{method:"get",params:{params1:"upToken"}}},n.S(this)}}});