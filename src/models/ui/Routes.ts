export interface RouteProps {
  exact: boolean;
  key: string;
  path: string;
  page: (customProps?: any) => (props: any) => React.ReactNode;
}
