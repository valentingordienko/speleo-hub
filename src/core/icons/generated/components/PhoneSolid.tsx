import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PhoneSolid.svg';

export function PhoneSolid(props: TProps) {
  return (
    <Icon {...props} name="PhoneSolid">
      <SVG />
    </Icon>
  );
}
