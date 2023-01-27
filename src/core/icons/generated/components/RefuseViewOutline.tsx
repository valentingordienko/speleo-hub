import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RefuseViewOutline.svg';

export function RefuseViewOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RefuseViewOutline">
      <SVG />
    </Icon>
  );
}
