import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaudiArabia.svg';

export function SaudiArabia(props: TBaseProps) {
  return (
    <Icon {...props} name="SaudiArabia">
      <SVG />
    </Icon>
  );
}
