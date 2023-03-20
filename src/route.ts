import { FC } from 'react';

export enum HeaderType {
  global = 'global',
  subPage = 'subPage'
}

export interface RouteItem {
  path: string;
  redirect?: string;
  component?: FC;
  children?: RouteItem[];
  layout?: FC<{children?: FC}>;
}

export const ROUTE_CONFIG: Record<string, RouteItem> = {

};
