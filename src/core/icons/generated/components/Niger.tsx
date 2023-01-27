import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Niger.svg';

export function Niger(props: TBaseProps) {
  return (
    <Icon {...props} name="Niger">
      <SVG />
    </Icon>
  );
}
