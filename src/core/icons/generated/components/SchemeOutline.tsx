import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SchemeOutline.svg';

export function SchemeOutline(props: TProps) {
  return (
    <Icon {...props} name="SchemeOutline">
      <SVG />
    </Icon>
  );
}
