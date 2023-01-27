import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Category.svg';

export function Category(props: TBaseProps) {
  return (
    <Icon {...props} name="Category">
      <SVG />
    </Icon>
  );
}
