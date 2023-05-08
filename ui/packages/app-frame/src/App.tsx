import type { Component } from 'solid-js';
import { ItemType, Sidebar, SidebarEntry } from './Sidebar';
import { Header } from './Header';
import { Body } from './Body';


const initialEntries: SidebarEntry[] = [
  {
    kind: ItemType.Group, 
    text: "Contents",
    items: [
      {kind: ItemType.Single, text: "Typography", url: "#typography"},
      {kind: ItemType.Single, text: "Images", url: "images"},
      {kind: ItemType.Single, text: "Tables", url: "#tables"},
      {kind: ItemType.Single, text: "Figures", url: "#figures"},
    ],
  },
  {
    kind: ItemType.Group, 
    text: "Forms",
    items: [
      {kind: ItemType.Single, text: "Overview", url: "#overview"},
      {kind: ItemType.Single, text: "Disabled forms", url: "#disabled-forms"},
      {kind: ItemType.Single, text: "Sizing", url: "#sizing"},
      {kind: ItemType.Single, text: "Input group", url: "#input-group"},
      {
        kind: ItemType.Group, 
        text: "Components",
        items: [
          {kind: ItemType.Single, text: "Accordion", url:"#accordion"},
          {kind: ItemType.Single, text: "Alerts", url:"#alerts"},
          {kind: ItemType.Single, text: "Badge", url:"#badge"},
          {kind: ItemType.Single, text: "Breadcrumb", url:"#breadcrumb"},
          {kind: ItemType.Single, text: "Buttons", url:"#buttons"},
          {kind: ItemType.Single, text: "Card", url:"#card"},
          {kind: ItemType.Single, text: "Carousel", url:"#carousel"},
          {kind: ItemType.Single, text: "Dropdowns", url:"#dropdowns"},
          {kind: ItemType.Single, text: "List group", url:"#list-group"},
          {kind: ItemType.Single, text: "Modal", url:"#modal"},
          {kind: ItemType.Single, text: "Navs", url:"#navs"},
          {kind: ItemType.Single, text: "Navbar", url:"#navbar"},
          {kind: ItemType.Single, text: "Pagination", url:"#pagination"},
          {kind: ItemType.Single, text: "Popovers", url:"#popovers"},
          {kind: ItemType.Single, text: "Progress", url:"#progress"},
          {kind: ItemType.Single, text: "Scrollspy", url:"#scrollspy"},
          {kind: ItemType.Single, text: "Spinners", url:"#spinners"},
          {kind: ItemType.Single, text: "Toasts", url:"#toasts"},
          {kind: ItemType.Single, text: "Tooltips", url:"#tooltips"},
        ],
      },
      {kind: ItemType.Single, text: "Floating labels", url: "#floating-labels"},
      {kind: ItemType.Single, text: "Validation", url: "#validation"},
    ],
  },
  {kind: ItemType.Single, text: "Button group", url:"#button-group"},
]


const App: Component = () => {
  return (
    <>
      <Sidebar items={initialEntries}/>
      <Header/>
      <Body/>

    </>
  );
};

export default App;
