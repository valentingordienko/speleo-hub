import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocOperationsOutline.svg';

export function DocOperationsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocOperationsOutline">
      <SVG />
    </Icon>
  );
}
