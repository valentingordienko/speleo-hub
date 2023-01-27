import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileSNGOutline.svg';

export function FileSNGOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FileSNGOutline">
      <SVG />
    </Icon>
  );
}
