// COMPONENTS PROPS

export interface ButtonProps {
  children: string;
  className?: string;
  onclick?: () => void;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export interface AbstractProps {
  title: string;
  description: string;
}

export interface NavItemProps {
  href: string;
  text: string;
}

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Defining Layout
export interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
