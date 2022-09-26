import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXLSOutline.svg';

export function FileXLSOutline(props: TProps) {
  return (
    <Icon {...props} name="FileXLSOutline">
      <SVG />
    </Icon>
  );
}
