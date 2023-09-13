import{j as _}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:l,size:g="normal",allCaps:x=!1,color:v="text-primary",fontColor:z="#000000"})=>_.jsx("span",{className:`${g} ${v}`,style:{color:z},children:x?l.toUpperCase():l});try{s.displayName="MyLabel",s.__docgenInfo={description:`AllCaps: bolean
color:
fontColor:string -- al texto del span`,displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Todas mayusculas",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Color del span",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:"#000000"},description:"Color del texto",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"My Label",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"AllCaps",size:"normal",allCaps:!0}},r={args:{label:"Secondary",size:"normal",color:"text-secondary"}},o={args:{label:"Custom color",size:"normal",fontColor:"red"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Basic label"
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "AllCaps",
    size: "normal",
    allCaps: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,d,y;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    size: "normal",
    color: "text-secondary"
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var C,f,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Custom color",
    size: "normal",
    fontColor: "red"
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secondary,A as __namedExportsOrder,q as default};
//# sourceMappingURL=MyLabel.stories-4b18ce0f.js.map
