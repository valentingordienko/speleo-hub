import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSignOutline.svg';

export function DocSignOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocSignOutline">
      <SVG />
    </Icon>
  );
}
