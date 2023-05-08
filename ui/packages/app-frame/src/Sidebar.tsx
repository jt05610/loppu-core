import { For} from 'solid-js';
import type { Component } from 'solid-js';

export enum ItemType {
  Single,
  Heading,
  Line,
  Group,
}

export interface SidebarEntry {
  kind: ItemType;
  text?: string;
  url?: string;
  items?: SidebarEntry[];
  }

interface SidebarItemProps {
  level: number;
  value: SidebarEntry;  
}

export const SidebarItem: Component<SidebarItemProps> = (props) => {
  switch (props.value.kind) {
  case ItemType.Single: 
    return (
      <li>
        <a
          class="d-inline-flex align-items-center rounded"
          href={props.value.url}
        >
          {props.value.text}
        </a>
      </li>
    );  case ItemType.Heading: 
    return <li class="border-bottom my-3">{props.value.text}</li>
  case ItemType.Line: 
    return <li class="border-top my-3"></li>
  case ItemType.Group: 
    return (
      <li class="my-2">
        <button
          class="btn d-inline-flex align-items-center collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          data-bs-target={"#"+props.value.text +"-collapse"}
          aria-controls={props.value.text +"-collapse"}        
        >
          {props.value.text}
        </button>
        <ul class="list-unstyled ps-3 collapse" id={props.value.text +"-collapse"}>
        <For each={props.value.items}>
          {(item) => {
            return (
            <SidebarItem level={props.level+1} value={item}/>
            )
          }
          }
        </For>
        </ul>
      </li>
    );  
  }
} 
    
  

interface SidebarProps {
  items: SidebarEntry[]
}


export const Sidebar: Component<SidebarProps> = (props) => {
  return (
    <>
      <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">Dashboard</h2>
        <nav class="small" id="toc">
          <ul class="list-unstyled">
            <For each={props.items}>
            {(item) => {
                return (
                  <SidebarItem level={0} value={item}/>
                )
              }
            }
            </For>
          </ul>
        </nav>
      </aside>

  </>
  )
}

