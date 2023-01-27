import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SchemeOutline.svg';

export function SchemeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SchemeOutline">
      <SVG />
    </Icon>
  );
}
