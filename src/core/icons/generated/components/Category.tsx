import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Category.svg';

export function Category(props: TProps) {
  return (
    <Icon {...props} name="Category">
      <SVG />
    </Icon>
  );
}
