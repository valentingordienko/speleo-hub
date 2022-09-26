import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSignOutline.svg';

export function DocSignOutline(props: TProps) {
  return (
    <Icon {...props} name="DocSignOutline">
      <SVG />
    </Icon>
  );
}
