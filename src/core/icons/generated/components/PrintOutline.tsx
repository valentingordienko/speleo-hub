import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PrintOutline.svg';

export function PrintOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PrintOutline">
      <SVG />
    </Icon>
  );
}
