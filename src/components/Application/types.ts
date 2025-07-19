
export interface Application {
  id: string;
  title: string;
  image: string;
  description: string;
  stats: ApplicationStat[];
  status: 'active' | 'research';
}

export interface ApplicationStat {
  label: string;
  value: string;
}