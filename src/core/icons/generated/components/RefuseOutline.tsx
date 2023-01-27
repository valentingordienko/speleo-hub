import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RefuseOutline.svg';

export function RefuseOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RefuseOutline">
      <SVG />
    </Icon>
  );
}
