import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const Products = lazy(() => import("./products/Products"));
export const News = lazy(() => import("./news/News"));
export const Departments = lazy(() => import("./departments/Departments"));
export const Laboratories = lazy(() => import("./labaratories/Laboratories"));
export const About = lazy(() => import("./about/About"));
