import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WikiOutline.svg';

export function WikiOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="WikiOutline">
      <SVG />
    </Icon>
  );
}
