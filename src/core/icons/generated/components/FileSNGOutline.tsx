import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileSNGOutline.svg';

export function FileSNGOutline(props: TProps) {
  return (
    <Icon {...props} name="FileSNGOutline">
      <SVG />
    </Icon>
  );
}
