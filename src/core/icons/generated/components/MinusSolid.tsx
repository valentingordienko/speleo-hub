import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MinusSolid.svg';

export function MinusSolid(props: TProps) {
  return (
    <Icon {...props} name="MinusSolid">
      <SVG />
    </Icon>
  );
}
