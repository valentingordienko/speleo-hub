import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXLSOutline.svg';

export function FileXLSOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FileXLSOutline">
      <SVG />
    </Icon>
  );
}
