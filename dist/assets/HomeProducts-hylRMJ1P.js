import{u,r as t,j as s,f as x}from"./index-ECVRS5b2.js";const h=()=>{const o=u(),[c,l]=t.useState([]),[d,n]=t.useState(!0),[r,i]=t.useState(null);return t.useEffect(()=>{(async()=>{try{const a=await x.get("http://95.85.121.153:5634/product-group");l(a.data)}catch{i("Failed to fetch products")}finally{n(!1)}})()},[]),d?s.jsx("div",{children:"Loading..."}):r?s.jsx("div",{children:r}):s.jsx("div",{className:"mt-20 mb-5 w-full",children:s.jsx("div",{className:"grid gap-5 grid-cols-12",children:c.map(e=>s.jsxs("div",{className:"col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6 rounded bg-white overflow-hidden shadow-lg hover:cursor-pointer",children:[s.jsx("img",{className:"w-full",src:e.image,alt:"Card"}),s.jsxs("div",{className:"px-6 py-4 flex flex-col flex-grow",children:[s.jsx("div",{className:"font-bold text-xl mb-2 text-center h-20",children:e.name_en}),s.jsx("div",{className:"mt-auto",children:s.jsx("button",{className:"bg-blue-500 px-4 py-2 w-full text-white hover:bg-blue-600 rounded-[6px]",onClick:()=>o(`/products/${e.id}`),children:"More"})})]})]},`product_item_${e.id}`))})})};export{h as H};
