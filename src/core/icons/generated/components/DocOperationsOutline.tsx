import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocOperationsOutline.svg';

export function DocOperationsOutline(props: TProps) {
  return (
    <Icon {...props} name="DocOperationsOutline">
      <SVG />
    </Icon>
  );
}
