import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PrintOutline.svg';

export function PrintOutline(props: TProps) {
  return (
    <Icon {...props} name="PrintOutline">
      <SVG />
    </Icon>
  );
}
