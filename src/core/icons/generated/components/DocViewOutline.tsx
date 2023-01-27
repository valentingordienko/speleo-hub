import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocViewOutline.svg';

export function DocViewOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocViewOutline">
      <SVG />
    </Icon>
  );
}
