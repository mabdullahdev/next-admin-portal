import { ModalVariants } from './constants';

export type ModalProps = {
  title: string;
  description?: string;
  icon?: string;
  open: boolean;
  children?: React.ReactNode;
  close: () => void;
  variant?: ModalVariants;
}

export type VariantModalProps= Pick<ModalProps,'children' | 'title'>
