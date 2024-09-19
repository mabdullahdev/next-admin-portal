import { ModalVariants } from './constants';

//------------------------Modal Types------------------------
export type ModalProps = {
  title: string;
  description?: string;
  icon?: string;
  open: boolean;
  children?: React.ReactNode;
  close: () => void;
  variant?: ModalVariants;
}

export type VariantModalProps= Pick<ModalProps,'children' | 'title' | 'description' | 'icon'>

export type WarningModalProps = ModalProps & {
  warning: string,
  onConfirmBtn: (e: React.MouseEvent<HTMLButtonElement>) => void
}