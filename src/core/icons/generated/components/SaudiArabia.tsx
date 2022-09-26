import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaudiArabia.svg';

export function SaudiArabia(props: TProps) {
  return (
    <Icon {...props} name="SaudiArabia">
      <SVG />
    </Icon>
  );
}
