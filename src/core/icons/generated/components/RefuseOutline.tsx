import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RefuseOutline.svg';

export function RefuseOutline(props: TProps) {
  return (
    <Icon {...props} name="RefuseOutline">
      <SVG />
    </Icon>
  );
}
