import { Product } from '../store/product';

export interface productProps {
  data: Product;
}

export interface ErrorProps {
  message?: string | null;
  onRetry?: () => void;
}
