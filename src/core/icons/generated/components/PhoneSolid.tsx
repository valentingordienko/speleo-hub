import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PhoneSolid.svg';

export function PhoneSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PhoneSolid">
      <SVG />
    </Icon>
  );
}
