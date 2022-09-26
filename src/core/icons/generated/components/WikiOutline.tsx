import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WikiOutline.svg';

export function WikiOutline(props: TProps) {
  return (
    <Icon {...props} name="WikiOutline">
      <SVG />
    </Icon>
  );
}
