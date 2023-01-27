import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MinusSolid.svg';

export function MinusSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MinusSolid">
      <SVG />
    </Icon>
  );
}
