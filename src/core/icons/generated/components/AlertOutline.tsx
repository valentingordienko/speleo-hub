import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlertOutline.svg';

export function AlertOutline(props: TProps) {
  return (
    <Icon {...props} name="AlertOutline">
      <SVG />
    </Icon>
  );
}
