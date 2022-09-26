import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TxtColorOutline.svg';

export function TxtColorOutline(props: TProps) {
  return (
    <Icon {...props} name="TxtColorOutline">
      <SVG />
    </Icon>
  );
}
