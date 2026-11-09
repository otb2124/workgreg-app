import { Route } from "@angular/router";

export interface RouteChild extends Route {
  title?: string;
  icon?: string;
  children?: RouteChild[];

  displayNav?: boolean;

  data?: { id: string };
}

export const routes: RouteChild[] = [
  {
    path: '',
    redirectTo: 'workspace',
    pathMatch: 'full',
  },
  {
    path: 'workspace',
    title: 'Workspace',
    loadComponent: () => import('./pages/workspace.page/workspace.page').then(m => m.WorkspacePage),
  },
];
