import { Product } from '@/__generated__/graphql';

type Brand = 'Philips' | 'Sony';

export enum ModelCode {
  'E27' = 'E27 ES',
  'B22' = 'B22 BC',
}

export type Products = Product[];
