import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TxtColorOutline.svg';

export function TxtColorOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TxtColorOutline">
      <SVG />
    </Icon>
  );
}
