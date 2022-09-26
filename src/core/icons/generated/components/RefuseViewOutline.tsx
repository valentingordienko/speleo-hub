import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RefuseViewOutline.svg';

export function RefuseViewOutline(props: TProps) {
  return (
    <Icon {...props} name="RefuseViewOutline">
      <SVG />
    </Icon>
  );
}
