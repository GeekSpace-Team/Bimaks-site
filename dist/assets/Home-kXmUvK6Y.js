import{j as e,u as c,a as n,r as x}from"./index-21gBf-CA.js";import{H as m}from"./HomeProducts-t_JYrNcq.js";const d=()=>e.jsxs("div",{className:"relative h-[60vh] text-blue-400 px-[10%] flex flex-col justify-center overflow-hidden",children:[e.jsx("video",{src:"/video/Видео-фон-с-водой.mp4",autoPlay:!0,muted:!0,loop:!0,className:"absolute top-0 left-0 w-full h-full object-cover"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h1",{className:"text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px]",children:"bimaks"}),e.jsx("h2",{className:"text-[15px] sm:text-[17px] mt-[-20px] sm:mt-[10px] md:mt-[-20px] md:tracking-[10px] lg:tracking-[17px] sm:tracking-[5.5px]",children:"TURKMENISTAN"})]})]}),p=()=>{const a=c(),{t:s}=n(),i=()=>{a("/about")};return e.jsxs("div",{className:"flex w-full justify-between px-[10%] mt-32 mb-32 py-[5%]",children:[e.jsx("div",{className:"w-[30%] flex items-center ",children:e.jsx("img",{src:"/logo/photo_2024-08-15_17-14-45.jpg",alt:"Logo",className:"w-full h-56"})}),e.jsxs("div",{className:"w-[60%] dark:text-white flex flex-col ",children:[e.jsx("h2",{className:"text-3xl  font-bold mb-4",children:s("home.awtTitle")}),e.jsx("p",{className:"text-base mb-6",children:s("home.awtText1")}),e.jsx("p",{className:"text-base mb-6",children:s("home.awtText2")}),e.jsx("button",{onClick:i,className:"bg-blue-500 text-white px-6 py-2 rounded w-44 hover:bg-blue-600 transition-colors",children:s("nav.about")})]})]})},u=()=>{const[a,s]=x.useState(null),i=l=>{s(l)},r=()=>{s(null)},o=[{default:"/images/Halal Certificate.be35dd6e (1).png",hover:"/logo/photo_2024-08-15_17-19-40.jpg"},{default:"/images/ISO 9001.8661a8d0.png",hover:"/images/iso 9.jpg"},{default:"/logo/photo_2024-08-15_17-19-02.jpg",hover:"/logo/photo_2024-08-15_17-19-46.jpg"},{default:"/logo/photo_2024-08-15_17-18-54.jpg",hover:"/images/nsf.jpg"}];return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"dark:text-gray-300 text-[40px] text-center mb-10",children:"Our Certificates"}),e.jsx("div",{className:"grid grid-cols-1 mb-32 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8",children:o.map((l,t)=>e.jsxs("div",{className:`relative w-full overflow-hidden rounded-lg ${t===o.length-1?"mt-8":"mt-0"}`,onMouseEnter:()=>i(t),onMouseLeave:r,children:[e.jsx("div",{className:`transition-opacity duration-700 ease-in-out ${t===o.length-1?"h-[140px]":"h-[200px]"}`,children:e.jsx("img",{src:l.hover,alt:`Certificate ${t}`,className:`object-contain w-full h-full transition-opacity duration-700 ease-in-out ${a===t?"opacity-0":"opacity-100"}`})}),e.jsx("img",{src:l.default,alt:`Certificate ${t}`,className:`absolute top-0 left-0 object-contain w-full transition-opacity duration-700 ease-in-out ${a===t?"opacity-100":"opacity-0"}`,style:{height:t===o.length-1?"150px":"200px"}})]},t))})]})},j=()=>e.jsxs("div",{children:[e.jsx(d,{}),e.jsxs("div",{className:"px-[10%]",children:[e.jsx(m,{}),e.jsx(p,{}),e.jsx(u,{})]})]});export{j as default};